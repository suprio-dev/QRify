

// QR TIMER


let timer = document.querySelector("#timer");
let clearBtn = document.querySelector("#clearBtn");
let regenerateBtn = document.querySelector("#regenerateBtn");
let timerBar = document.querySelector("#timerBar");
let timerId;


function qrLimit() {
  let i = 30;
  timerId = setInterval(function () {
    timer.textContent = `${i}` + "s";
    timerBar.style.width = `${(i / 30) * 100}%`;
    i--;
    if (i < 0) {
      clearInterval(timerId);
      qrBox.className = `flex min-h-[190px]
                            items-center justify-center
                            rounded-2xl
                            border border-dashed
                            border-white/[0.09]
                            bg-black/20
                            p-5
                            shadow-inner`;
      qrBox.innerHTML = ` <div class="text-center">

                        <div class="mx-auto mb-3 flex h-12 w-12
                                    items-center justify-center
                                    rounded-xl
                                    border border-white/[0.07]
                                    bg-white/[0.025]">

                            <span class="text-xl opacity-30">
                                ▦
                            </span>

                        </div>

                        <p class="text-xs text-white/30">
                            Your QR code will appear here
                        </p>

                    </div>`;
      qrInput.value = "";
      timer.textContent = `30s`;
      timerBar.style.width = `100%`;
    }
  }, 1000);

}

// OR CODE GENERATOR

let qrInput = document.querySelector("#qrInput");
let generateBtn = document.querySelector("#generateBtn");
let qrBox = document.querySelector("#qrBox");
let oldValue = "";


generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let value = qrInput.value.trim();
  oldValue = value;

  if (value !== "") {

    qrBox.innerHTML = "";
    new QRCode(qrBox, {
      text: value,
      width: 170,
      height: 170
    });
    qrLimit();
  }



})


clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  qrInput.value = "";
  qrBox.className = `flex min-h-[190px]
                            items-center justify-center
                            rounded-2xl
                            border border-dashed
                            border-white/[0.09]
                            bg-black/20
                            p-5
                            shadow-inner`;
  qrBox.innerHTML = ` <div class="text-center">

                        <div class="mx-auto mb-3 flex h-12 w-12
                                    items-center justify-center
                                    rounded-xl
                                    border border-white/[0.07]
                                    bg-white/[0.025]">

                            <span class="text-xl opacity-30">
                                ▦
                            </span>

                        </div>

                        <p class="text-xs text-white/30">
                            Your QR code will appear here
                        </p>

                    </div>`;
  clearInterval(timerId);
  timer.textContent = `30s`;
  timerBar.style.width = `100%`;
  value = "";
})

regenerateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  qrRegenerate(oldValue);
})


function qrRegenerate(oldValue) {
  qrInput.value = oldValue;
  qrBox.innerHTML = "";
  new QRCode(qrBox, {
    text: oldValue,
    width: 170,
    height: 170
  });
  qrLimit();
}