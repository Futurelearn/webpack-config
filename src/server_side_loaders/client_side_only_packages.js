const clientSideOnlyPackageNames = [
  'c3',
  'd3',
  'd3v4',
  'react-select',
  'tribute',
];

const pathsRegex = new RegExp(`.*node_modules.*\\b(${clientSideOnlyPackageNames.join('|')})\\b`, 'i');

module.exports = {
  clientSideOnlyPackageNames,
  clientSideOnlyPackagePaths: pathsRegex,
};
