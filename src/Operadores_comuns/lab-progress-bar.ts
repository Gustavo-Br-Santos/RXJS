import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis tincidunt ex ut faucibus. Sed purus nisi, posuere eu ligula vel, egestas bibendum ante. Fusce arcu nisl, vestibulum id fermentum ut, ultrices et justo. Etiam consectetur libero sit amet nisi suscipit volutpat. Suspendisse pharetra odio felis, eu vulputate tortor efficitur et. Nam velit erat, accumsan et massa vitae, molestie egestas est. Maecenas porta, elit in sollicitudin placerat, turpis turpis ultricies nulla, sed bibendum nisi nulla nec libero.
<br><br>
Morbi facilisis vestibulum mi, eget ornare elit accumsan at. Fusce et rutrum massa. Nullam placerat leo in tempor congue. Integer in ullamcorper ex, eget feugiat metus. Etiam tristique erat vel magna fermentum, vel sagittis eros hendrerit. Suspendisse non mattis ante. Vivamus massa dui, tempor at consectetur dignissim, efficitur vitae elit. Pellentesque lobortis arcu mauris. Integer ut lacus velit. Nulla magna purus, malesuada quis efficitur vitae, sodales id elit. Fusce egestas magna arcu, nec vulputate neque convallis a. Pellentesque nunc mi, aliquam non ante eu, porta vestibulum nibh. Nunc vulputate eu dolor ut placerat. In consectetur erat nec massa rutrum, eget pellentesque velit bibendum. Maecenas venenatis ligula at sapien suscipit aliquam. Proin a justo nec libero bibendum feugiat sit amet eget augue.
<br><br>
Cras auctor tortor eget orci rutrum finibus. Pellentesque pretium libero justo, sed porttitor nibh maximus sed. Aenean aliquet diam ac rhoncus eleifend. Donec varius volutpat nisl quis molestie. Mauris auctor finibus augue, egestas feugiat nunc bibendum consequat. Aenean id lobortis tellus, eu iaculis magna. Aenean maximus lorem sit amet arcu viverra consectetur. Nulla nisi dolor, dictum sed leo ac, posuere tempus elit. Praesent accumsan purus ut egestas ultrices. Curabitur efficitur ex mi, ac varius sem accumsan non. Morbi ut sem non tortor malesuada tincidunt. Morbi eget ligula vehicula, porta purus lacinia, dignissim dolor. Aliquam blandit nunc at nibh dictum suscipit. Vivamus non risus sed tellus efficitur interdum ut pulvinar mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras malesuada lacus sit amet libero tincidunt, aliquet interdum lectus elementum.
<br><br>
Morbi bibendum imperdiet mauris, ut blandit mi porta in. Nunc laoreet magna et pharetra dictum. Sed sagittis ligula eget sapien consectetur, non feugiat leo ultrices. Aenean eget ante nec ipsum volutpat sollicitudin ac non nisl. Aliquam venenatis pulvinar augue, in maximus sem commodo vel. Nulla facilisi. Aenean dignissim facilisis lacus, non suscipit quam suscipit luctus. Phasellus blandit ligula metus, quis pellentesque nisl vestibulum eu. Vivamus commodo magna ut tincidunt venenatis. Cras imperdiet consectetur urna eu scelerisque. Sed feugiat aliquam volutpat.
<br><br>
Sed eleifend luctus placerat. Nulla facilisi. Donec blandit sem eget leo elementum malesuada. Nulla eu sapien a dolor iaculis accumsan quis in lacus. Phasellus fermentum sem a aliquet facilisis. Proin quis tortor a massa malesuada pulvinar. Pellentesque sed ante vitae neque fringilla suscipit vel nec ipsum. Nunc eleifend lectus ac sem egestas placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rhoncus nisi lorem, quis sodales turpis porta sed. Cras interdum ornare ex porta malesuada. Mauris sit amet faucibus leo. Pellentesque tincidunt, quam quis maximus sollicitudin, eros enim elementum mi, non mattis nisi dolor sed nunc.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar)

// Criar uma função que faz o cálculo do scroll da página
const calcularPorcentagemScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100
} 

const scroll$ = fromEvent(document, 'scroll');

const progresso$ = scroll$.pipe(
    map (event => calcularPorcentagemScroll(event)),
    tap(console.log)
);

progresso$.subscribe( porcentagem => {

    progressBar.style.width = `${porcentagem}%`

})