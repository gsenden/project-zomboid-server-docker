import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Setting from './Setting.svelte';


describe('Feature: Setting Component for numbers', () => {
	describe('Scenario: User views a number setting with label and value', () => {
        it('There should be a component with the test ID "MaxPlayers"', async () => {
			// Given: A user wants to configure a numeric setting
			// When: A NumberSetting component is rendered with a label
			render(Setting, {
				type: 'number',
				testId: 'MaxPlayers',
				label: 'Max Players',
				alt: 'Maximum number of players allowed on the server',
				value: 16
			});

			// Then: There should be a component with the test ID "MaxPlayers"
			const found = page.getByTestId('MaxPlayers');
			await expect.element(found).toBeInTheDocument();
		});

		it('They should see the label text', async () => {
			// Given: A user wants to configure a numeric setting
			// When: A NumberSetting component is rendered with a label
			render(Setting, {
				type: 'number',
				testId: 'MaxPlayers',
				label: 'Max Players',
				alt: 'Maximum number of players allowed on the server',
				value: 16
			});

			// Then: They should see the label text
			const label = page.getByLabelText('Max Players');
			await expect.element(label).toBeInTheDocument();
		});

        it('They should see a way to input the value they wish to configure', async () => {
			// Given: A user wants to configure a numeric setting
			const value = 16;
            const alt = 'Maximum number of players allowed on the server';
            
            // When: A NumberSetting component is rendered with a label

			render(Setting, {
				type: 'number',
				testId: 'MaxPlayers',
				label: 'Max Players',
				alt: alt,
				value: value
			});

			// Then: They should see a way to input the value they wish to configure
			const input = page.getByRole('spinbutton');
            await expect.element(input).toHaveValue(value);
		});

        it('They should see some clarification text when hovering over the input', async () => {
			// Given: A user wants to configure a numeric setting
			const value = 16;
            const alt = 'Maximum number of players allowed on the server';

            // When: A NumberSetting component is rendered with a label
			render(Setting, {
				type: 'number',
				testId: 'MaxPlayers',
				label: 'Max Players',
				alt: alt,
				value: value
			});

			// Then: They should see hover text (title attribute) on the input
			const input = page.getByRole('spinbutton');
			await expect.element(input).toHaveAttribute('title', alt);
		});

		it('They should only be able to enter numbers when type is number', async () => {
			// Given: A user wants to configure a numeric setting
			const value = 16;
			const alt = 'Maximum number of players allowed on the server';

			// When: A Setting component is rendered with type 'number'
			render(Setting, {
				type: 'number',
				testId: 'MaxPlayers',
				label: 'Max Players',
				alt: alt,
				value: value
			});

			// Then: The input should have type='number' which restricts to numeric input
			const input = page.getByRole('spinbutton');
			await expect.element(input).toHaveAttribute('type', 'number');
			
			// And: The input should have inputmode='numeric' for mobile keyboards
			await expect.element(input).toHaveAttribute('inputmode', 'numeric');
		});
	});
});
