# -----------------------------------------------------------------------------
# Optional dependency: A collection of utils & shell commands for your project
# -----------------------------------------------------------------------------
utils: # Install the additional Makefile utils into: '.common/' (if not exists)
	@curl -fs https://bitbucket.org/\!api/2.0/snippets/studio_devops/4ngXMb/master/files/define-common.sh | bash
-include .common/make/Makefile # Include common commands (if installed)
# -----------------------------------------------------------------------------
