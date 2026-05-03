Isto significa que a cada terno ordenado $(x, y, z)$ corresponde um ponto $P$ cujo vetor posição é

$$x\vec{e}_1 + y\vec{e}_2 + z\vec{e}_3.$$

Mas o que acontece se resolvermos mudar a base de nosso sistema de coordenadas, trocando $\{\vec{e}_1, \vec{e}_2, \vec{e}_3\}$ por $\{\vec{e}_1, \vec{e}_2, \vec{e}_3\}$? A resposta é simples: quando formos ao arquivo e trouxermos o terno ordenado $(x, y, z)$, nosso sistema nos dará não mais o ponto $P$ cujo vetor posição é $x\vec{e}_1 + y\vec{e}_2 + z\vec{e}_3$, mas o ponto $P'$, cujo vetor posição é

$$x\vec{\epsilon}_1 + y\vec{\epsilon}_2 + z\vec{\epsilon}_3.$$

Figura 12.3:

**Observação**: Estamos, na verdade, fazendo uma opção no que diz respeito à maneira como vamos representar, em nossas cabeças, uma transformação linear. O efeito visual da transformação $T$ é claro: transportamos o ponto $P$ do reticulado que tem por base um cubo (definido por meio de $\vec{e}_1, \vec{e}_2$ e $\vec{e}_3$) para o ponto $P'$ (de mesmas coordenadas) do reticulado que tem por base um paralelepípedo (definido por $\vec{e}_1, \vec{e}_2$ e $\vec{e}_3$). É como se a prefeitura contratasse um arquiteto (provavelmente catalão), para remodelar as pracinhas. O arquiteto, então, altera os brinquedos conhecidos como trepa-trepa, fazendo com que deixem de ser tão certinhos, assumindo, na nova versão, formas mais obliquas.

**Exercício 12.17** Seja $T : V \to V$ uma transformação linear, com $T\vec{e}_1 = \vec{e}_1, T\vec{e}_2 = \vec{e}_2, T\vec{e}_3 = \vec{e}_3$. Identifique, no espaço, pontos a vetores. Considere um sólido $\varphi$. Dividindo o espaço em cubinhos com lados nas direções dos vetores da base canônica, obtenha uma aproximação para o volume de $\varphi$. Considere, agora, a imagem de $\varphi$ por $T$, $T(\varphi)$. Aproxime o volume de $T(\varphi)$ usando os paralelepípedos (com lados nas direções de $\vec{e}_1, \vec{e}_2$ e $\vec{e}_3$) imagens dos que usou para aproximar o volume de $\varphi$ (veja a figura correspondente, em dimensão 2).