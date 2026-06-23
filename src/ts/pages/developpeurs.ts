/* construction des skeletons*/

function cardSkeletons(): void {
    const container = document.querySelector ('main') as HTMLElement;
    if(!container) return;

    const realCards = container.querySelectorAll(`.card-dorsel`);
    if(realCards.length === 0) return;
    realCards.forEach(card => {
        (card as HTMLElement).style.display = 'none'});

    const skeletonnHtml = `
    <div class="card-dorsel sk-card sk-shimmer">
    <div class="sk-avatar sk-shimmer"></div>
    <div class="sk-name sk-shimmer"></div>
    <div class="sk-title sk-shimmer"></div>
    <ul class="Tools1">
      <li class="sk-li sk-shimmer"></li>
      <li class="sk-li sk-shimmer"></li>
      <li class="sk-li sk-shimmer"></li>
      <li class="sk-li sk-shimmer"></li>
    </ul>
    <div class="sk-btn sk-shimmer"></div>
    </div>`.repeat(realCards.length);
    container.insertAdjacentHTML('beforeend', skeletonnHtml);

    setTimeout(() => {
        container.querySelectorAll('.sk-card').forEach(sk => sk.remove());
    realCards.forEach(card => {
        (card as HTMLElement).style.display = 'block';
});
}, 3500);
}
window.addEventListener('DOMContentLoaded', cardSkeletons);

/* Construction des skeletons fin */