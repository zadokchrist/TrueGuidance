// patient
function filterView(view) {
    document.getElementById('month-view').classList.remove('visible');
    document.getElementById('week-view').classList.remove('visible');
    document.getElementById('day-view').classList.remove('visible');
    document.getElementById(view + '-view').classList.add('visible');
}