import { provide, ref, reactive} from 'vue';

export function captureUserInput() {
    const input = reactive({
        langs: [],
        date: null
    })

    // Append a lang to the  array
    function updateLangs(lang) {
        input.langs = { ...input.langs, ...lang};
    }
    
    // Set the whole array
    function setLangs(langs) {
        input.langs = langs;
    }

    function setDate(date) {
        input.date = date;
    }
    function log() {
        console.log(input);
    }

    const inputCtx = {
        input,
        setDate,
        setLangs,
        log
    }

    provide('USER_INPUT', inputCtx);
    return inputCtx;
}

export function changeText() {
  let label = 'test';

  function update(value) {
    console.log(label)
    label = value;
    console.log(label)
  }

  const ctx = {
    label,
    update,
  };

  provide('LABEL_TEXT', ctx);

  return ctx;
}