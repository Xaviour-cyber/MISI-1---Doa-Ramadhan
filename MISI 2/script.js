var count = 0;
var target = 33;
var circumference = 2 * Math.PI * 88;

var counterEl = document.getElementById('counter');
var targetLabelEl = document.getElementById('targetLabel');
var progressCircle = document.getElementById('progressCircle');
var badgeEl = document.getElementById('badge');
var btnTambah = document.getElementById('btnTambah');
var btnReset = document.getElementById('btnReset');
var btnTargets = document.querySelectorAll('.btn-target');

function updateDisplay() {
    counterEl.textContent = count;

    var progress = Math.min(count / target, 1);
    var offset = circumference - (progress * circumference);
    progressCircle.style.strokeDashoffset = offset;

    if (count >= target) {
        badgeEl.classList.remove('hidden');
        badgeEl.classList.add('badge-show');
        progressCircle.style.stroke = '#ca8a04';
    } else {
        badgeEl.classList.add('hidden');
        badgeEl.classList.remove('badge-show');
        progressCircle.style.stroke = '#14532d';
    }
}

btnTambah.addEventListener('click', function () {
    count++;
    updateDisplay();

    btnTambah.classList.add('btn-pop');
    setTimeout(function () {
        btnTambah.classList.remove('btn-pop');
    }, 200);
});

btnReset.addEventListener('click', function () {
    count = 0;
    updateDisplay();
});

btnTargets.forEach(function (btn) {
    btn.addEventListener('click', function () {
        target = parseInt(btn.getAttribute('data-target'));
        count = 0;
        targetLabelEl.textContent = target;

        btnTargets.forEach(function (b) {
            b.classList.remove('target-active');
        });
        btn.classList.add('target-active');

        updateDisplay();
    });
});

updateDisplay();
