// Type definitions for ag-grid v17.1.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare class Environment {
    private eGridDiv;
    private gridSize;
    private iconSize;
    private sassVariables;
    loadSassVariables(): void;
    getSassVariable(theme: string, key: string): number;
    getTheme(): string;
}
