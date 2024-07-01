import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { LucideMoon, LucideSun } from 'lucide-react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export function ThemeToggle({ className }: { className?: ClassNameValue }) {
	const { theme, setTheme } = useTheme();

	return (
		<Button className={twMerge('', className)} variant="outline" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			<LucideSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<LucideMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	);
}
