import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import NavShelf from './NavShelf.svelte';

describe('NavShelf', () => {
	test('starts closed', () => {
		render(NavShelf);

		expect(screen.getByRole('button', { name: 'menu' })).toHaveAttribute('aria-expanded', 'false');
		expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument();
	});

	test('opens when the menu button is clicked', async () => {
		const user = userEvent.setup();
		render(NavShelf);

		await user.click(screen.getByRole('button', { name: 'menu' }));

		expect(screen.getByRole('button', { name: 'menu' })).toHaveAttribute('aria-expanded', 'true');
		expect(screen.getAllByRole('link').map((link) => link.textContent?.trim())).toEqual([
			'Home',
			'About',
			'Experience',
			'Projects',
			'Contact'
		]);
	});

	test('closes when a link is clicked', async () => {
		const user = userEvent.setup();
		render(NavShelf);

		await user.click(screen.getByRole('button', { name: 'menu' }));
		await user.click(screen.getByRole('link', { name: 'About' }));

		expect(screen.getByRole('button', { name: 'menu' })).toHaveAttribute('aria-expanded', 'false');
		expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument();
	});
});
