import { TimerPlugin } from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

export class TimerSettingsTab extends PluginSettingTab {
    plugin: TimerPlugin

    constructor(app: App, plugin: TimerPlugin) {
        super(app, plugin);

        this.plugin = plugin;
    }

    display() {
        let { containerEl } = this;

        containerEl.createEl("h1", {text: "Timer Settings"});

        new Setting(containerEl)
            .setName('Current Task')
            .setDesc('Name of the current text')
            .addText((item) => { 
                item.setValue(this.plugin.settings.currentTask).onChange(
                (value) => { this.plugin.settings.currentTask = value;
                this.plugin.saveSettings()
                })
            });

    }

}
