const spawn = require('cross-spawn')
const path = require('path')

const { resolveBin } = require('../utils')

const args = process.argv.slice(2)

const config = [
  '--config',
  path.join(__dirname, '..', 'configs', 'prettierrc.json')
]
const write = ['--write']
const filesToApply = [
  '{{.storybook,src}/**/*,*}.{js,jsx,ts,tsx,css,less,scss,json,md,markdown}'
]

const relativeArgs = args.map(a => a.replace(`${process.cwd()}/`, ''))

const result = spawn.sync(
  resolveBin('prettier'),
  [...config, ...write, ...filesToApply].concat(relativeArgs),
  { stdio: 'inherit' }
)
