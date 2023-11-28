// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks
getInstruction(
  'mashedPotatoes',
  0,
  (step0) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`
    getInstruction(
      'mashedPotatoes',
      1,
      (step1) => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step1}</li>`
        getInstruction(
          'mashedPotatoes',
          2,
          (step2) => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step2}</li>`
            getInstruction(
              'mashedPotatoes',
              3,
              (step3) => {
                document.querySelector(
                  '#mashedPotatoes'
                ).innerHTML += `<li>${step3}</li>`
                getInstruction(
                  'mashedPotatoes',
                  4,
                  (step4) => {
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>${step4}</li>`
                    //Bonus 1
                    document
                      .querySelector('#mashedPotatoesImg')
                      .removeAttribute('hidden')
                  },
                  (error) => {
                    console.log(error)
                  }
                )
              },
              (error) => {
                console.log(error)
              }
            )
          },
          (error) => {
            console.log(error)
          }
        )
      },
      (error) => {
        console.log(error)
      }
    )
  },
  (error) => {
    console.log(error)
  }
)
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((result) => {
    document.querySelector('#steak').innerHTML += `<li>${result}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step2) => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step3) => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step4) => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step6) => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector('#steak').innerHTML += `<li>${step7}</li>`
    //Bonus 1
    document.querySelector('#steakImg').removeAttribute('hidden')
  })
  .catch((error) => console.log(error))

// Iteration 3 using async/await

// async function makeBroccoli() {
//   // ... Your code here
// }

const makeBroccoli = async () => {
  const numberOfSteps = broccoli.length

  try {
    for (let i = 0; i < numberOfSteps; i += 1) {
      const step = await obtainInstruction('broccoli', i)
      document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`
    }

    // Bonus 1
    document.querySelector('#broccoliImg').removeAttribute('hidden')
  } catch (error) {
    console.log(error)
  }
}

makeBroccoli()

// Bonus 2 - Promise all
const pr0 = obtainInstruction('brusselsSprouts', 0)
const pr1 = obtainInstruction('brusselsSprouts', 1)
const pr2 = obtainInstruction('brusselsSprouts', 2)
const pr3 = obtainInstruction('brusselsSprouts', 3)
const pr4 = obtainInstruction('brusselsSprouts', 4)
const pr5 = obtainInstruction('brusselsSprouts', 5)
const pr6 = obtainInstruction('brusselsSprouts', 6)
const pr7 = obtainInstruction('brusselsSprouts', 7)

Promise.all([pr0, pr1, pr2, pr3, pr4, pr5, pr6, pr7])
  .then((values) => {
    values.forEach((instruction) => {
      document.querySelector(
        '#brusselsSprouts'
      ).innerHTML += `<li>${instruction}</li>`

      document.querySelector('#brusselsSproutsImg').removeAttribute('hidden')
    })
  })
  .catch((error) => console.log(error))
