import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Backups from './Backups.svelte';

describe('Feature: Backups Configuration', () => {
	describe('Scenario: User views the Backups section', () => {
        it('They should see a way to configure the BackupsCount', async () => {
			// Given: A user wants to configure their Project Zomboid Backups details
			// When: They navigate to the Backups configuration section
			render(Backups);

			// Then: They should see a way to configure the BackupsCount
			const backupsCountInput = page.getByTestId('BackupsCount');
			await expect.element(backupsCountInput).toBeInTheDocument();
		});

        it('They should see a way to configure the BackupsOnStart', async () => {
			// Given: A user wants to configure their Project Zomboid Backups details
			// When: They navigate to the Backups configuration section
			render(Backups);

			// Then: They should see a way to configure the BackupsOnStart
			const backupsOnStartInput = page.getByTestId('BackupsOnStart');
			await expect.element(backupsOnStartInput).toBeInTheDocument();
		});

        it('They should see a way to configure the BackupsOnVersionChange', async () => {
			// Given: A user wants to configure their Project Zomboid Backups details
			// When: They navigate to the Backups configuration section
			render(Backups);

			// Then: They should see a way to configure the BackupsOnVersionChange
			const backupsOnVersionChangeInput = page.getByTestId('BackupsOnVersionChange');
			await expect.element(backupsOnVersionChangeInput).toBeInTheDocument();
		});

		it('They should see a way to configure the BackupsPeriod', async () => {
			// Given: A user wants to configure their Project Zomboid Backups details
			// When: They navigate to the Backups configuration section
			render(Backups);

			// Then: They should see a way to configure the BackupsPeriod
			const backupsPeriodInput = page.getByTestId('BackupsPeriod');
			await expect.element(backupsPeriodInput).toBeInTheDocument();
		});
    });
});