let selected_event = document.querySelector('.event-detail')
let a_link = document.querySelector('.link')

a_link.addEventListener('click', function toggle() {
  selected_event.classList.toggle('hidden');
});