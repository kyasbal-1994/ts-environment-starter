import { BabelPlugin, CSSModules, CSSPlugin, FuseBox, SassPlugin, StylusPlugin } from "fuse-box";
import { argv } from "yargs";

// Arrange yargs input
interface IBuildConfig {
    watchMode: boolean;
    hotModuleLoading: boolean;
    devServer: boolean;
    productionMode: boolean;
}
const config = {} as IBuildConfig;
config.watchMode = argv.watch || false;
config.hotModuleLoading = argv.hotModuleLoading || false;
config.devServer = argv.devServer || false;
config.productionMode = argv.productionMode || false;

// Configure build steps

const fuse = FuseBox.init({
    homeDir: "src",
    output: "public/dist/$name.js",
    tsConfig: "./tsconfig.client.json",
    cache: true,
    sourceMaps: false,
    plugins: [
        BabelPlugin({
            presets: ["env"],
        }),
    ],
});

let instruction = fuse.bundle("app").target("browser").plugin(StylusPlugin(), CSSModules(), CSSPlugin({
    group: "bundle.css",
    outFile: "./public/dist/bundle.css",
    inject: (file: string) => `dist/${file}`,
})).plugin(CSSPlugin()).instructions(">./client/index.tsx");
if (config.watchMode) {
    instruction = instruction.watch();
}
if (config.hotModuleLoading) {
    instruction = instruction.hmr();
}
if (config.devServer) {
    fuse.dev({
        open: true,
        root: "public",
    });
}

fuse.run();
