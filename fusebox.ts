import { FuseBox } from "fuse-box";

const fuse = FuseBox.init({
    homeDir: "src",
    output: `dist/$name.js`,
    tsConfig: `./tsconfig.client.json`,
    cache: true
});

fuse.bundle("app").instructions(">index.ts");

fuse.run();