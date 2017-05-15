from fabric.api import local


def release():
    """Creates a release to github"""
    local('yarn build')

