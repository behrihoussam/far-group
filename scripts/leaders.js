const buttons = document.querySelectorAll('.our_leaders--slider_left-side_item');
const leaders = document.querySelectorAll('.our_leaders--slider_right-side--item');

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        leaders.forEach((leader, index) => {
            leader.classList.add("leader_active");
            if (idx !== index) {
                leader.classList.remove("leader_active");
            }
        })
    });
})