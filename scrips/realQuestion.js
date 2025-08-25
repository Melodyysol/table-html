  import { engQuest, mathQuest, generalQuest } from "./questions.js";
  import { options } from "./option.js";
  const eachQuestion = document.querySelector('.subject')
  let engQuestHTML = ''
  generalQuest.forEach(quest => {

    const questId = quest.id
    let matchingQuest;

    options.forEach((option) => {
      if (option.id === questId) {
        matchingQuest = option
      }
    })
    engQuestHTML += `
    <div class="quest-cont">
    <div class="quest-num">Question ${quest.questNum}</div>
    <div class="instruction">
      ${quest.question}
    </div>
    <div class="opts">
      <div class="to-check to-check-${matchingQuest.id}"
        data-checked-id="${matchingQuest.id}" data-value="A"
      >
        <input type="radio" class="radio radio-${matchingQuest.id}"
         name="radio-${matchingQuest.id}" value="A">
        <label class="real-opts" for="radio-${matchingQuest.id}" data-check-id="radio-${matchingQuest.id}">
         ${matchingQuest.optionA}
        </label>
      </div>
      <div class="to-check to-check-${matchingQuest.id}"
        data-checked-id="${matchingQuest.id}" data-value="B"
      >
        <input type="radio" class="radio radio-${matchingQuest.id}"
         name="radio-${matchingQuest.id}" value="B">
        <label class="real-opts" for="radio-${matchingQuest.id}" data-check-id="radio-${matchingQuest.id}">
         ${matchingQuest.optionB}
        </label>
      </div>
      <div class="to-check to-check-${matchingQuest.id}"
       data-checked-id="${matchingQuest.id}" data-value="C"
      >
        <input type="radio" class="radio radio-${matchingQuest.id}"
         name="radio-${matchingQuest.id}" value="C">
        <label class="real-opts" for="radio-${matchingQuest.id}" data-check-id="radio-${matchingQuest.id}">
         ${matchingQuest.optionC}
        </label>
      </div>
      <div class="to-check to-check-${matchingQuest.id}"
        data-checked-id="${matchingQuest.id}" data-value="D"
        >
        <input type="radio" class="radio radio-${matchingQuest.id}" 
         name="radio-${matchingQuest.id}" value="D">
        <label class="real-opts" for="radio-${matchingQuest.id}" data-check-id="radio-${matchingQuest.id}">
         ${matchingQuest.optionD}
        </label>
      </div>
    </div>
    <div class="subj-del">
      <div class="eng-small">(english language - 2021)</div>
      <div class="delete-icon">Delete</div>
    </div>
  </div>
    ` 
  })

  document.addEventListener('click', (e) => {
    if(
    e.target.classList.contains('to-check') || 
    e.target.closest('.to-check')) {
      const wrapper = e.target.closest('.to-check');
      const value = wrapper.dataset.value;
      const id = wrapper.dataset.id;
      //find the matching radio and check it

      const radio = 
        wrapper.querySelector(`input[type='radio']
        [value='${value}']`);

      if (radio) radio.checked = true;
    }
  })

  eachQuestion.innerHTML = engQuestHTML