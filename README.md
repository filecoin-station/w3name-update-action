# w3name-update-action
Update a [w3name](https://github.com/web3-storage/w3name?tab=readme-ov-file).

## Usage

```yaml
steps:
  - uses: filecoin-station/w3name-update-action@v0
    with:
      value: "Hello from GitHub Actions!"
      private-key: ${{ secrets.PRIVATE_KEY }}
      revision: ${{ secrets.REVISION }}
```

Use a script like [scripts/w3name.js](./scripts/w3name.js) to create
credentials.
