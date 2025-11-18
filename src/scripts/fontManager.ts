interface FontState {
	currentText: string;
	currentSize: number;
	textTransform: string;
	fontStyle: string;
	fontWeight: number;
	loadedFonts: Set<string>;
}

interface LoadedFont {
	name: string;
	family: string;
	category: string;
	size: number;
	dataUrl: string;
	format: string;
}

// Estado global de la aplicación
const state: FontState = {
	currentText: 'El veloz murciélago hindú comía feliz cardillo y kiwi.',
	currentSize: 28,
	textTransform: 'none',
	fontStyle: 'normal',
	fontWeight: 400,
	loadedFonts: new Set<string>(),
};

// Array para mantener las fuentes cargadas con todos sus datos
const customFonts: LoadedFont[] = [];

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
	initializeApp();
});

function initializeApp(): void {
	setupTextControls();
	setupDropZone();
	setupCategoryFilter();
	setupKeyboardNavigation();
	updateAllFontPreviews();
}

// ===== CONTROLES DE TEXTO =====

function setupTextControls(): void {
	const textInput = document.getElementById('custom-text-input') as HTMLInputElement | null;
	const sizeSlider = document.getElementById('font-size-slider') as HTMLInputElement | null;
	const sizeOutput = document.getElementById('font-size-output');
	const resetButton = document.getElementById('reset-button');
	const fontWeightSelect = document.getElementById('font-weight-select') as HTMLSelectElement | null;
	const textTransformSelect = document.getElementById('text-transform-select') as HTMLSelectElement | null;
	const fontStyleCheckbox = document.getElementById('font-style-checkbox') as HTMLInputElement | null;

	if (!textInput || !sizeSlider || !sizeOutput || !resetButton) {
		console.error('No se encontraron los elementos de control necesarios');
		return;
	}

	// Manejar cambios en el texto personalizado
	textInput.addEventListener('input', (e) => {
		const target = e.target as HTMLInputElement;
		state.currentText = target.value;
		updateAllFontPreviews();
	});

	// Manejar cambios en el tamaño de fuente
	sizeSlider.addEventListener('input', (e) => {
		const target = e.target as HTMLInputElement;
		const size = parseInt(target.value, 10);
		state.currentSize = size;
		updateAllFontPreviews();
		sizeOutput.textContent = `${size}px`;

		// Actualizar atributos ARIA
		sizeSlider.setAttribute('aria-valuenow', size.toString());
		sizeSlider.setAttribute('aria-valuetext', `${size} pixeles`);
	});

	// Peso de fuente
	if (fontWeightSelect) {
		fontWeightSelect.addEventListener('change', () => {
			state.fontWeight = parseInt(fontWeightSelect.value, 10);
			updateAllFontPreviews();
			announceToScreenReader(`Peso de fuente cambiado a ${fontWeightSelect.value}`);
		});
	}

	// Transformación de texto
	if (textTransformSelect) {
		textTransformSelect.addEventListener('change', () => {
			state.textTransform = textTransformSelect.value;
			updateAllFontPreviews();
			announceToScreenReader(`Transformación de texto cambiada a ${textTransformSelect.value}`);
		});
	}

	// Estilo de fuente (italic)
	if (fontStyleCheckbox) {
		fontStyleCheckbox.addEventListener('change', () => {
			state.fontStyle = fontStyleCheckbox.checked ? 'italic' : 'normal';
			updateAllFontPreviews();
			announceToScreenReader(fontStyleCheckbox.checked ? 'Estilo itálico activado' : 'Estilo itálico desactivado');
		});
	}

	// Botón de reset
	resetButton.addEventListener('click', () => {
		state.currentText = 'El veloz murciélago hindú comía feliz cardillo y kiwi.';
		state.currentSize = 28;
		state.textTransform = 'none';
		state.fontStyle = 'normal';
		state.fontWeight = 400;

		textInput.value = state.currentText;
		sizeSlider.value = '28';
		sizeOutput.textContent = '28px';

		if (fontWeightSelect) fontWeightSelect.value = '400';
		if (textTransformSelect) textTransformSelect.value = 'none';
		if (fontStyleCheckbox) fontStyleCheckbox.checked = false;

		updateAllFontPreviews();
		announceToScreenReader('Valores restablecidos a los predeterminados');
	});
}

function updateAllFontPreviews(): void {
	const previewTexts = document.querySelectorAll('.font-preview-text');

	previewTexts.forEach((preview) => {
		const element = preview as HTMLElement;
		element.textContent = state.currentText;
		element.style.fontSize = `${state.currentSize}px`;
		element.style.textTransform = state.textTransform;
		element.style.fontStyle = state.fontStyle;
		element.style.fontWeight = state.fontWeight.toString();
	});
}

// ===== DRAG & DROP =====

function setupDropZone(): void {
	const dropZone = document.getElementById('drop-zone');
	const fileInput = document.getElementById('font-file-input') as HTMLInputElement;
	const dragOverlay = document.getElementById('drag-overlay');
	const fileInfo = document.getElementById('file-info');
	const errorMessage = document.getElementById('error-message');

	if (!dropZone || !fileInput || !dragOverlay) {
		console.error('No se encontraron los elementos de drop zone necesarios');
		return;
	}

	// Prevenir comportamiento por defecto
	['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
		dropZone.addEventListener(eventName, preventDefaults, false);
		document.body.addEventListener(eventName, preventDefaults, false);
	});

	// Highlight en drag over
	['dragenter', 'dragover'].forEach((eventName) => {
		dropZone.addEventListener(eventName, () => {
			dropZone.classList.add('drag-over');
			if (dragOverlay) {
				dragOverlay.style.display = 'flex';
			}
		});
	});

	['dragleave', 'drop'].forEach((eventName) => {
		dropZone.addEventListener(eventName, () => {
			dropZone.classList.remove('drag-over');
			if (dragOverlay) {
				dragOverlay.style.display = 'none';
			}
		});
	});

	// Manejar drop
	dropZone.addEventListener('drop', (e) => {
		const dt = (e as DragEvent).dataTransfer;
		const files = dt?.files;

		if (files && files.length > 0) {
			handleFontFile(files[0]);
		}
	});

	// Manejar selección de archivo
	fileInput.addEventListener('change', (e) => {
		const target = e.target as HTMLInputElement;
		const files = target.files;

		if (files && files.length > 0) {
			handleFontFile(files[0]);
		}
	});

	// Soporte de teclado para la zona de drop
	dropZone.addEventListener('keydown', (e) => {
		if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') {
			e.preventDefault();
			fileInput.click();
		}
	});
}

function preventDefaults(e: Event): void {
	e.preventDefault();
	e.stopPropagation();
}

function handleFontFile(file: File): void {
	const errorMessage = document.getElementById('error-message');
	const errorText = document.getElementById('error-text');

	// Validar tipo de archivo
	const validExtensions = ['.ttf', '.otf', '.woff', '.woff2'];
	const fileName = file.name.toLowerCase();
	const isValidType = validExtensions.some((ext) => fileName.endsWith(ext));

	if (!isValidType) {
		showError('Formato de archivo no soportado. Por favor, usa .ttf, .otf, .woff o .woff2');
		return;
	}

	// Validar tamaño (máximo 10MB)
	const maxSize = 10 * 1024 * 1024; // 10MB en bytes
	if (file.size > maxSize) {
		showError('El archivo es demasiado grande. Tamaño máximo: 10MB');
		return;
	}

	// Ocultar error si había uno
	if (errorMessage) {
		errorMessage.classList.add('hidden');
	}

	// Leer el archivo
	const reader = new FileReader();

	reader.onload = (e) => {
		const result = e.target?.result;

		if (typeof result === 'string') {
			loadCustomFont(result, file.name, file.size);
		}
	};

	reader.onerror = () => {
		showError('Error al leer el archivo. Por favor, intenta de nuevo.');
	};

	reader.readAsDataURL(file);
}

function loadCustomFont(dataUrl: string, fileName: string, fileSize: number): void {
	// Crear un identificador único para la fuente basado en su contenido
	const fontIdentifier = `${fileName}_${fileSize}_${dataUrl.substring(0, 100)}`;

	// Verificar si la fuente ya fue cargada
	if (state.loadedFonts.has(fontIdentifier)) {
		showError('Esta fuente ya ha sido cargada. No se permiten duplicados.');
		return;
	}

	// Crear un nuevo @font-face
	const fontFamilyName = `CustomFont_${Date.now()}`;
	const style = document.createElement('style');

	// Determinar el formato basado en la extensión
	let format = 'truetype';
	if (fileName.endsWith('.otf')) format = 'opentype';
	else if (fileName.endsWith('.woff')) format = 'woff';
	else if (fileName.endsWith('.woff2')) format = 'woff2';

	style.textContent = `
		@font-face {
			font-family: '${fontFamilyName}';
			src: url('${dataUrl}') format('${format}');
			font-weight: normal;
			font-style: normal;
			font-display: swap;
		}
	`;

	// Agregar al documento
	document.head.appendChild(style);

	// Guardar en el set de fuentes cargadas
	state.loadedFonts.add(fontIdentifier);

	// Guardar información completa de la fuente
	const loadedFont: LoadedFont = {
		name: fileName.replace(/\.[^/.]+$/, ''), // Nombre sin extensión
		family: fontFamilyName,
		category: 'Custom',
		size: fileSize,
		dataUrl: dataUrl,
		format: format,
	};
	customFonts.push(loadedFont);

	// Agregar la fuente al DOM
	setTimeout(() => {
		addFontToList(loadedFont, fontIdentifier);
		showSuccessMessage();
		announceToScreenReader(`Fuente personalizada ${fileName} cargada exitosamente`);

		// Limpiar el input para permitir cargar el mismo archivo de nuevo si se elimina
		const fileInput = document.getElementById('font-file-input') as HTMLInputElement;
		if (fileInput) {
			fileInput.value = '';
		}
	}, 100);
}

function addFontToList(font: LoadedFont, fontIdentifier: string): void {
	const fontListContainer = document.getElementById('font-list-container');
	if (!fontListContainer) return;

	// Crear el elemento de fuente
	const article = document.createElement('article');
	article.className =
		'font-item group relative rounded-2xl border border-white/15 bg-white/8 p-4 shadow-md backdrop-blur-xl';
	article.dataset.fontFamily = font.family;
	article.dataset.fontName = font.name;
	article.dataset.fontCategory = font.category;
	article.dataset.isCustom = 'true';
	article.dataset.fontIdentifier = fontIdentifier;
	article.setAttribute('role', 'listitem');
	article.setAttribute('aria-label', `Fuente ${font.name}, categoría ${font.category}`);

	article.innerHTML = `
		<div class="flex items-start justify-between gap-4">
			<div class="min-w-0 flex-1 space-y-2">
				<div class="flex items-center gap-2">
					<h3 class="font-semibold text-white">${font.name}</h3>
					<span
						class="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs text-white/60 shadow-sm backdrop-blur-sm"
						aria-label="Categoría: ${font.category}"
					>
						${font.category}
					</span>
				</div>

				<p
					class="font-preview-text wrap-break-word text-sm text-white/70 transition-all duration-200 group-hover:text-white"
					style="font-family: ${font.family}; font-size: ${state.currentSize}px; text-transform: ${state.textTransform}; font-style: ${state.fontStyle}; font-weight: ${state.fontWeight}; word-wrap: break-word;"
					aria-label="Texto de ejemplo con esta fuente"
				>
					${state.currentText}
				</p>

				<p class="font-mono text-xs text-white/40">${font.family}</p>
			</div>

			<button
				type="button"
				class="remove-custom-font-btn shrink-0 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-red-400/35 hover:bg-red-500/20 hover:shadow-lg active:scale-95"
				aria-label="Eliminar fuente ${font.name}"
			>
				Eliminar
			</button>
		</div>
	`;

	// Agregar al inicio de la lista (después del primer elemento si existe)
	if (fontListContainer.firstChild) {
		fontListContainer.insertBefore(article, fontListContainer.firstChild);
	} else {
		fontListContainer.appendChild(article);
	}

	// Configurar el botón de eliminar
	const removeBtn = article.querySelector('.remove-custom-font-btn');
	if (removeBtn) {
		removeBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			removeCustomFont(article, fontIdentifier);
		});
	}

	// Actualizar contador
	updateFontCount();

	// Aplicar navegación por teclado al nuevo elemento
	setupKeyboardNavigationForItem(article);
}

function removeCustomFont(article: HTMLElement, fontIdentifier: string): void {
	// Remover del DOM
	article.remove();

	// Remover del set de fuentes cargadas
	state.loadedFonts.delete(fontIdentifier);

	// Remover del array de fuentes custom
	const index = customFonts.findIndex((f) => {
		const id = `${f.name}_${f.size}_${f.dataUrl.substring(0, 100)}`;
		return id === fontIdentifier;
	});
	if (index !== -1) {
		customFonts.splice(index, 1);
	}

	// Actualizar contador
	updateFontCount();

	announceToScreenReader('Fuente personalizada eliminada');
}

function showSuccessMessage(): void {
	const fileInfo = document.getElementById('file-info');

	if (fileInfo) {
		fileInfo.classList.remove('hidden');

		// Ocultar después de 3 segundos
		setTimeout(() => {
			fileInfo.classList.add('hidden');
		}, 3000);
	}
}

function showError(message: string): void {
	const errorMessage = document.getElementById('error-message');
	const errorText = document.getElementById('error-text');

	if (errorMessage && errorText) {
		errorText.textContent = message;
		errorMessage.classList.remove('hidden');

		// Ocultar después de 5 segundos
		setTimeout(() => {
			errorMessage.classList.add('hidden');
		}, 5000);
	}

	announceToScreenReader(`Error: ${message}`);
}

// ===== FILTRO DE CATEGORÍAS =====

function setupCategoryFilter(): void {
	const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement | null;
	const noFontsMessage = document.getElementById('no-fonts-message');

	if (!categoryFilter) {
		return;
	}

	categoryFilter.addEventListener('change', () => {
		const selectedCategory = categoryFilter.value;
		const fontItems = document.querySelectorAll('.font-item');
		let visibleCount = 0;

		fontItems.forEach((item) => {
			const element = item as HTMLElement;
			const category = element.dataset.fontCategory || '';

			if (selectedCategory === 'all' || category === selectedCategory) {
				element.style.display = '';
				visibleCount++;
			} else {
				element.style.display = 'none';
			}
		});

		// Actualizar contador
		updateFontCount();

		// Mostrar mensaje si no hay resultados
		if (noFontsMessage) {
			if (visibleCount === 0) {
				noFontsMessage.classList.remove('hidden');
			} else {
				noFontsMessage.classList.add('hidden');
			}
		}

		announceToScreenReader(`Mostrando ${visibleCount} fuentes de la categoría ${getCategoryLabel(selectedCategory)}`);
	});
}

function updateFontCount(): void {
	const fontCount = document.getElementById('font-count');
	const fontItems = document.querySelectorAll('.font-item');
	let visibleCount = 0;

	fontItems.forEach((item) => {
		const element = item as HTMLElement;
		if (element.style.display !== 'none') {
			visibleCount++;
		}
	});

	if (fontCount) {
		fontCount.textContent = visibleCount.toString();
	}
}

function getCategoryLabel(value: string): string {
	const categories: Record<string, string> = {
		all: 'Todas las fuentes',
		serif: 'Serif',
		'sans-serif': 'Sans Serif',
		monospace: 'Monospace',
		display: 'Display',
		handwriting: 'Handwriting',
		Custom: 'Personalizadas',
	};

	return categories[value] || value;
}

// ===== NAVEGACIÓN POR TECLADO =====

function setupKeyboardNavigation(): void {
	const fontItems = Array.from(document.querySelectorAll('.font-item'));

	fontItems.forEach((item) => {
		setupKeyboardNavigationForItem(item as HTMLElement);
	});
}

function setupKeyboardNavigationForItem(item: HTMLElement): void {
	item.addEventListener('keydown', (e) => {
		const event = e as KeyboardEvent;
		const fontItems = Array.from(document.querySelectorAll('.font-item')).filter(
			(el: Element) => (el as HTMLElement).style.display !== 'none',
		);
		const currentIndex = fontItems.indexOf(item);
		let nextItem: HTMLElement | null = null;

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				nextItem = fontItems[currentIndex + 1] as HTMLElement;
				break;
			case 'ArrowUp':
				event.preventDefault();
				nextItem = fontItems[currentIndex - 1] as HTMLElement;
				break;
			case 'Home':
				event.preventDefault();
				nextItem = fontItems[0] as HTMLElement;
				break;
			case 'End':
				event.preventDefault();
				nextItem = fontItems[fontItems.length - 1] as HTMLElement;
				break;
		}

		if (nextItem) {
			nextItem.focus();
		}
	});
}

// ===== UTILIDADES =====

function announceToScreenReader(message: string): void {
	const announcement = document.createElement('div');
	announcement.setAttribute('role', 'status');
	announcement.setAttribute('aria-live', 'polite');
	announcement.classList.add('sr-only');
	announcement.textContent = message;

	document.body.appendChild(announcement);

	setTimeout(() => {
		document.body.removeChild(announcement);
	}, 1000);
}

export { updateAllFontPreviews, state, customFonts };
