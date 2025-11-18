export interface Font {
	name: string;
	family: string;
	category: 'serif' | 'sans-serif' | 'monospace' | 'display' | 'handwriting';
	isSystem: boolean;
	weight?: string;
	style?: 'normal' | 'italic';
}

export interface TypographyOptions {
	textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	fontStyle: 'normal' | 'italic';
	fontWeight: number;
}

export const defaultFonts: Font[] = [
	{
		name: 'Arial',
		family: 'Arial, sans-serif',
		category: 'sans-serif',
		isSystem: true,
	},
	{
		name: 'Helvetica',
		family: 'Helvetica, Arial, sans-serif',
		category: 'sans-serif',
		isSystem: true,
	},
	{
		name: 'Times New Roman',
		family: '"Times New Roman", Times, serif',
		category: 'serif',
		isSystem: true,
	},
	{
		name: 'Georgia',
		family: 'Georgia, serif',
		category: 'serif',
		isSystem: true,
	},
	{
		name: 'Courier New',
		family: '"Courier New", Courier, monospace',
		category: 'monospace',
		isSystem: true,
	},
	{
		name: 'Verdana',
		family: 'Verdana, Geneva, sans-serif',
		category: 'sans-serif',
		isSystem: true,
	},
	{
		name: 'Trebuchet MS',
		family: '"Trebuchet MS", sans-serif',
		category: 'sans-serif',
		isSystem: true,
	},
	{
		name: 'Comic Sans MS',
		family: '"Comic Sans MS", cursive',
		category: 'handwriting',
		isSystem: true,
	},
	{
		name: 'Impact',
		family: 'Impact, Charcoal, sans-serif',
		category: 'display',
		isSystem: true,
	},
	{
		name: 'Palatino',
		family: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
		category: 'serif',
		isSystem: true,
	},
	{
		name: 'Garamond',
		family: 'Garamond, serif',
		category: 'serif',
		isSystem: true,
	},
	{
		name: 'Consolas',
		family: 'Consolas, monaco, monospace',
		category: 'monospace',
		isSystem: true,
	},
];

export const defaultPreviewText = 'El veloz murciélago hindú comía feliz cardillo y kiwi.';

export const fontCategories = [
	{ value: 'all', label: 'Todas las fuentes' },
	{ value: 'serif', label: 'Serif' },
	{ value: 'sans-serif', label: 'Sans Serif' },
	{ value: 'monospace', label: 'Monospace' },
	{ value: 'display', label: 'Display' },
	{ value: 'handwriting', label: 'Handwriting' },
] as const;

export const fontWeights = [
	{ value: '100', label: 'Thin (100)' },
	{ value: '200', label: 'Extra Light (200)' },
	{ value: '300', label: 'Light (300)' },
	{ value: '400', label: 'Normal (400)' },
	{ value: '500', label: 'Medium (500)' },
	{ value: '600', label: 'Semi Bold (600)' },
	{ value: '700', label: 'Bold (700)' },
	{ value: '800', label: 'Extra Bold (800)' },
	{ value: '900', label: 'Black (900)' },
] as const;

export const textTransforms = [
	{ value: 'none', label: 'Normal' },
	{ value: 'uppercase', label: 'MAYÚSCULAS' },
	{ value: 'lowercase', label: 'minúsculas' },
	{ value: 'capitalize', label: 'Capitalizar' },
] as const;

export const defaultTypographyOptions: TypographyOptions = {
	textTransform: 'none',
	fontStyle: 'normal',
	fontWeight: 400,
};
