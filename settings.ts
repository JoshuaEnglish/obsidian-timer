import { TimerPlugin } from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

export class TimerSettingsTab extends PluginSettingTab {
    plugin: TimerPlugin;

    constructor(app: App, plugin: TimerPlugin) {
        super(app, plugin);

        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        containerEl.createEl("h1", {text: "Timer Settings"});

        new Setting(containerEl)
            .setName('Current Task')
            .setDesc('Name of the current task')
            .addText(text =>  
                text.setValue(this.plugin.settings.currentTask)
                .onChange( async (value) => { 
                    this.plugin.settings.currentTask = value;
                    await this.plugin.saveSettings();
                })
            );

    }

}
