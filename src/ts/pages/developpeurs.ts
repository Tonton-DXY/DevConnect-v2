import {} from "../data/db"

function cardSkeletons(): void {
    const container = document.querySelector (`.profils-cards`) as HTMLElement;
    if(!container) return;

    const realCards = container.querySelectorAll(`.card`);
    realCards.forEach(card => (card as HTMLElement).style.display = 'none');

    const skeletonnHtml = `
    <div> class="card sk-card"></div>`.repeat(realCards.length);
    container.insertAdjacentHTML('afterbegin', skeletonnHtml);

    setTimeout(() => {
        container.querySelectorAll('.sk-card').forEach(sk => sk.remove());
    realCards.forEach(card => (card as HTMLElement).style.display = 'flex');
}, 300000);
}
window.addEventListener('DOMContentLoaded', cardSkeletons);
