const repo = 'Projeto-Desenvolvimento';

export default {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? `/${repo}` : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? `/${repo}/` : '',
  images: { unoptimized: true }
};
