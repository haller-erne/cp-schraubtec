# Overview

This repo keeps OGS project files, best practice is to create a subfolder for each project (or group of projects).

In the top level folder (where this file is located), there are the following files:

- `Readme.md`: This file
- `.gitignore`: Defines filter for files no to include in version control. In general, do **NOT add binary files** into version control (the exception is the project database *.fbc, see below).
- `activeproject.lua`: Allows to quickly switch the active project without touching the global `monitor.lua` file (from the `%programfiles (x86)%\OGS V3` installation directory)
- `activeproject.md`: Additional hints on howto setup simple project switching

## Cloning a project

Each git repo possibly keeps multiple OGS projects (stations). Instead of always cloning the complete repo, here are some hints on how to only clone a single project/station (basically a folder).

### Cloning a single project

To only checkout one of the projects, use a "partial clone" combined with a "sparse checkout".

The idea is, that the "partial clone" will basically clone nothing (just the basic repo information), the "sparse checkout" will then only checkout a single folder. 


	# clone the repo, but only download info, no data.
	git clone -n --depth=1 --filter=tree:0 https://github.com/haller-erne/cp-gwk-demo

	# do the selective (sparse) checkout of a single folder
	cd cp-bosch-horb
	# use the "Montage" subfolder
	git sparse-checkout set --no-cone SchraubTec
	git checkout

	# use the folder
	cd SchraubTec

## Database management

Binary files do not work well with git versioning. As a workaround, we only check in the *.fbc configuration (which is actually a backup of the configuration).

Database file names:

- `*.fdc`: Configuration databases, can be edited using `heOpCfg.exe`.
- `*.fbc`: Configuration backup database. Use `heOpImp` to generate configuration backup files.
- `station.fds`: Active station database file.

### Monitor default database loading behaviour

If `Monitor.exe` is started, it uses the following sequence to check for a station configuration (inside the active project directory):

1. Check for `station.fds`. If found, load it.
2. If `station.fds` is not found, scan for any `*.fdc`-file (configuration database). If exactly a single file is found, import it (run `heOpImp.exe` and generate a `station.fdb`). Then load the generated `station.fdb`.
3. If no (or multiple) `*.fdc`-files are found, then scan for `*.fbc` (configuration database backup) files. If exactly one file is found, then restore the file (create an identically named `*.fdc`-file), import and run (as in step 2.).

### Project checkout (git clone)

The git repository therefore only keeps the `*.fbc` file. The first time a repo is cloned and a project is started, `Monitor.exe` will then automatically import the file and generate a configuration and a station database (as there is no `*.fdc` and no `*.fds` in that project folder).

### Project modifications

After the initial run, the configuration database can be edited as usual (open the `*.fdc`-file and run `Export Project` from within the `heOpCfg` Editor).

### Upload a new version to git

After all changes have been tested, run the `heOpImp.exe` manually. Select the `Backup Database` option to create a database backup file (change the file extension to `*.fbc`). Usually you will want to overwrite the already existsing file, as this is version controlled anyway.

### Download a new version from git

When pulling changes from git (`git pull`), you might get an updated `*.fbc`-file. However, changes in this file are **NOT** automatically imported. You will have to either manually merge changes or re-import the full file again (possibly loosing your changes in your local `*.fdc`).

To re-import all changes, delete the local `*.fdc` and the `station.fds` and start `Monitor.exe` (automatic import) or use `heOpImp.exe` and select the restore operation.
