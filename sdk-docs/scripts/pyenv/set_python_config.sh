#!/usr/bin/env sh

# This script can also be run during your shell initialization process

PY_VERSION="3.11.0"

if [[ -n "$1" ]]; then
  PY_VERSION="$1"
fi

export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"

if which pyenv > /dev/null; then
    echo ">> Initialising pyenv..."
    eval "$(pyenv init --path)"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"
fi

echo '>> Setting Python version...'
pyenv install -s $PY_VERSION
pyenv shell $PY_VERSION
pyenv rehash

printf ">> Installed Python: "
pyenv version
python -V
echo
