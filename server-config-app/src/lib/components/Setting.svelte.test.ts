import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Setting from './Setting.svelte';


describe('Feature: Setting Component', () => {
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

	describe('Scenario: User views a description setting with multiline input', () => {
		it('They should see a textarea when type is description', async () => {
			// Given: A user wants to configure a description setting
			const value = 'A friendly survival server with custom mods and events';
			const alt = 'A detailed description of your server for players';

			// When: A Setting component is rendered with type 'description'
			render(Setting, {
				type: 'description',
				testId: 'ServerDescription',
				label: 'Server Description',
				alt: alt,
				value: value
			});

			// Then: They should see a textarea element
			const textarea = page.getByRole('textbox');
			await expect.element(textarea).toBeInTheDocument();
		});

		it('They should see a textarea with 3 rows when type is description', async () => {
			// Given: A user wants to configure a description setting
			const value = 'A friendly survival server with custom mods and events';
			const alt = 'A detailed description of your server for players';

			// When: A Setting component is rendered with type 'description'
			render(Setting, {
				type: 'description',
				testId: 'ServerDescription',
				label: 'Server Description',
				alt: alt,
				value: value
			});

			// Then: The textarea should have 3 rows
			const textarea = page.getByRole('textbox');
			await expect.element(textarea).toHaveAttribute('rows', '3');
		});

		it('They should see the description value in the textarea', async () => {
			// Given: A user wants to configure a description setting
			const value = 'A friendly survival server with custom mods and events';
			const alt = 'A detailed description of your server for players';

			// When: A Setting component is rendered with type 'description'
			render(Setting, {
				type: 'description',
				testId: 'ServerDescription',
				label: 'Server Description',
				alt: alt,
				value: value
			});

			// Then: The textarea should contain the value
			const textarea = page.getByRole('textbox');
			await expect.element(textarea).toHaveValue(value);
		});

		it('They should see hover text on the textarea when type is description', async () => {
			// Given: A user wants to configure a description setting
			const value = 'A friendly survival server with custom mods and events';
			const alt = 'A detailed description of your server for players';

			// When: A Setting component is rendered with type 'description'
			render(Setting, {
				type: 'description',
				testId: 'ServerDescription',
				label: 'Server Description',
				alt: alt,
				value: value
			});

			// Then: The textarea should have the title attribute for hover text
			const textarea = page.getByRole('textbox');
			await expect.element(textarea).toHaveAttribute('title', alt);
		});
	});

	describe('Scenario: User views a checkbox setting for boolean options', () => {
		it('They should see a checkbox when type is checkbox', async () => {
			// Given: A user wants to configure a boolean setting
			const value = true;
			const alt = 'Enable or disable PvP combat on the server';

			// When: A Setting component is rendered with type 'checkbox'
			render(Setting, {
				type: 'checkbox',
				testId: 'PvPEnabled',
				label: 'PvP Enabled',
				alt: alt,
				value: value
			});

			// Then: They should see a checkbox element
			const checkbox = page.getByRole('checkbox');
			await expect.element(checkbox).toBeInTheDocument();
		});

		it('They should see a checked checkbox when value is true', async () => {
			// Given: A user wants to configure a boolean setting with value true
			const value = true;
			const alt = 'Enable or disable PvP combat on the server';

			// When: A Setting component is rendered with type 'checkbox' and value true
			render(Setting, {
				type: 'checkbox',
				testId: 'PvPEnabled',
				label: 'PvP Enabled',
				alt: alt,
				value: value
			});

			// Then: The checkbox should be checked
			const checkbox = page.getByRole('checkbox');
			await expect.element(checkbox).toBeChecked();
		});

		it('They should see an unchecked checkbox when value is false', async () => {
			// Given: A user wants to configure a boolean setting with value false
			const value = false;
			const alt = 'Enable or disable PvP combat on the server';

			// When: A Setting component is rendered with type 'checkbox' and value false
			render(Setting, {
				type: 'checkbox',
				testId: 'PvPEnabled',
				label: 'PvP Enabled',
				alt: alt,
				value: value
			});

			// Then: The checkbox should not be checked
			const checkbox = page.getByRole('checkbox');
			await expect.element(checkbox).not.toBeChecked();
		});

		it('They should see hover text on the checkbox when type is checkbox', async () => {
			// Given: A user wants to configure a boolean setting
			const value = true;
			const alt = 'Enable or disable PvP combat on the server';

			// When: A Setting component is rendered with type 'checkbox'
			render(Setting, {
				type: 'checkbox',
				testId: 'PvPEnabled',
				label: 'PvP Enabled',
				alt: alt,
				value: value
			});

			// Then: The checkbox should have the title attribute for hover text
			const checkbox = page.getByRole('checkbox');
			await expect.element(checkbox).toHaveAttribute('title', alt);
		});
	});
});
