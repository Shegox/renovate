Renovate supports updating of Docker dependencies within the configuration for [Project Piper](https://github.com/SAP/jenkins-library) found in `.pipeline/config.ya?ml` files or other YAML files that use the same format (via `fileMatch` configuration).
Updates are performed if the files follow the conventional format for Docker dependencies used in `.pipeline/config.ya?ml:`

```yaml
steps:
  cnbBuild:
    dockerImage: 'some-docker/dependency:1.2.3'
    runImage: 'docker.io/some-docker/dependency:1.2.3'
```

If you need to change the versioning format, read the [versioning](../../versioning/index.md) documentation to learn more.
