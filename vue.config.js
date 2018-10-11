module.exports = {
    runtimeCompiler: true,
    pages: {
      step01: {
        entry: 'src/pages/step01/main.js',
        template: 'src/pages/step01/step1.html'
      },
      step01_solution: {
        entry: 'src/pages/step01-solution/main.js',
        template: 'src/pages/step01-solution/step1.html'
      },
      step02: {
        entry: 'src/pages/step02/main.js',
        template: 'src/pages/step02/step2.html'
      },
      step02_solution: {
        entry: 'src/pages/step02-solution/main.js',
        template: 'src/pages/step02-solution/step2.html'
      },
      step03: {
        entry: 'src/pages/step03/main.js',
        template: 'src/pages/step03/index.html'
      },
      step03_solution: {
        entry: 'src/pages/step03-solution/main.js'
      },
      step04: {
        entry: 'src/pages/step04/main.js'
      },
      step04_solution: {
        entry: 'src/pages/step04-solution/main.js'
      },
      step05: {
        entry: 'src/pages/step05/main.js'
      },
      step05_solution: {
        entry: 'src/pages/step05-solution/main.js'
      },
      step06: {
        entry: 'src/pages/step06/main.js'
      },
      step06_solution: {
        entry: 'src/pages/step06-solution/main.js'
      },
      step07: {
        entry: 'src/pages/step07/main.js'
      },
      step07_solution: {
        entry: 'src/pages/step07-solution/main.js'
      },
      step08: {
        entry: 'src/pages/step08/main.js'
      },
      step08_solution: {
        entry: 'src/pages/step08-solution/main.js'
      },
      step09: {
        entry: 'src/pages/step09/main.js'
      },
      step09_solution: {
        entry: 'src/pages/step09-solution/main.js'
      },
      step10: {
        entry: 'src/pages/step10/main.js'
      },
      step10_solution: {
        entry: 'src/pages/step10-solution/main.js'
      },
      step11: {
        entry: 'src/pages/step11/main.js'
      },
      step11_solution: {
        entry: 'src/pages/step11-solution/main.js'
      },
      step12: {
        entry: 'src/pages/step12/main.js'
      },
      step12_solution: {
        entry: 'src/pages/step12-solution/main.js'
      },
      step13: {
        entry: 'src/pages/step13/main.js'
      },
      step13_solution: {
        entry: 'src/pages/step13-solution/main.js'
      },
      step14: {
        entry: 'src/pages/step14/main.js'
      },
      step14_solution: {
        entry: 'src/pages/step14-solution/main.js'
      },
      step15: {
        entry: 'src/pages/step15/main.js'
      },
      step15_solution: {
        entry: 'src/pages/step15-solution/main.js'
      },
      step16: {
        entry: 'src/pages/step16/main.js'
      },
      step16_solution: {
        entry: 'src/pages/step16-solution/main.js'
      },
      step17: {
        entry: 'src/pages/step17/main.js'
      },
      step17_solution: {
        entry: 'src/pages/step17-solution/main.js'
      },
      step18: {
        entry: 'src/pages/step18/main.js'
      },
      step18_solution: {
        entry: 'src/pages/step18-solution/main.js'
      },
      step19: {
        entry: 'src/pages/step19/main.js'
      },
      step19_solution: {
        entry: 'src/pages/step19-solution/main.js'
      }
    },
    devServer: {
      historyApiFallback: {
        rewrites: [
          { from: /\/step01_solution/, to: '/step01_solution.html' },
          { from: /\/step01$/, to: '/step01.html' },
          { from: /\/step02_solution/, to: '/step02_solution.html' },
          { from: /\/step02$/, to: '/step02.html' },
          { from: /\/step03_solution/, to: '/step03_solution.html' },
          { from: /\/step03$/, to: '/step03.html' },
          { from: /\/step04_solution/, to: '/step04_solution.html' },
          { from: /\/step04$/, to: '/step04.html' },
          { from: /\/step05_solution/, to: '/step05_solution.html' },
          { from: /\/step05$/, to: '/step05.html' },
          { from: /\/step06_solution/, to: '/step06_solution.html' },
          { from: /\/step06$/, to: '/step06.html' },
          { from: /\/step07_solution/, to: '/step07_solution.html' },
          { from: /\/step07$/, to: '/step07.html' },
          { from: /\/step08_solution/, to: '/step08_solution.html' },
          { from: /\/step08$/, to: '/step08.html' },
          { from: /\/step09_solution/, to: '/step09_solution.html' },
          { from: /\/step09$/, to: '/step09.html' },
          { from: /\/step10_solution/, to: '/step10_solution.html' },
          { from: /\/step10$/, to: '/step10.html' },
          { from: /\/step11_solution/, to: '/step11_solution.html' },
          { from: /\/step11$/, to: '/step11.html' },
          { from: /\/step12_solution/, to: '/step12_solution.html' },
          { from: /\/step12$/, to: '/step12.html' },
          { from: /\/step13_solution/, to: '/step13_solution.html' },
          { from: /\/step13$/, to: '/step13.html' },
          { from: /\/step14_solution/, to: '/step14_solution.html' },
          { from: /\/step14$/, to: '/step14.html' },
          { from: /\/step15_solution/, to: '/step15_solution.html' },
          { from: /\/step15$/, to: '/step15.html' },
          { from: /\/step16_solution/, to: '/step16_solution.html' },
          { from: /\/step16$/, to: '/step16.html' },
          { from: /\/step17_solution/, to: '/step17_solution.html' },
          { from: /\/step17$/, to: '/step17.html' },
          { from: /\/step18_solution/, to: '/step18_solution.html' },
          { from: /\/step18$/, to: '/step18.html' },
          { from: /\/step19_solution/, to: '/step19_solution.html' },
          { from: /\/step19$/, to: '/step19.html' },
        ]
      }
  }
}