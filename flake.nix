{
  description = "NixOS environment";

  inputs = { nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable"; };

  outputs = { self, nixpkgs, }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };

    in
    {
      devShell.${system} = with pkgs;

        mkShell rec {
          packages = [
            gcc
            android-studio
            nodejs_20
            nodePackages.yarn
            nodePackages.typescript
            nodePackages.typescript-language-server
          ];
        };
      shellHook = ''
        export ANDROID_HOME=./
      '';
    };
}
