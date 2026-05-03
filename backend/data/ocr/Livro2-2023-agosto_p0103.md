Exercício 11.12 Confira.

Vejamos, agora, como o mesmo resultado pode ser obtido com quatérnions. Considere os quatérnions

$$q = \cos \frac{\theta}{2} + \sin \frac{\theta}{2} \vec{u}, \quad q' = \cos \frac{\theta}{2} - \sin \frac{\theta}{2} \vec{u}.$$

Exercício 11.13 Entenda isso (pense o vetor $\vec{u}$ como $\vec{u} = ai + bj + zk$). Mostre que $qq' = q'q = 1$.

Exercício 11.14 Pense o vetor $\vec{v}$ como um quatérnion ($\vec{v} = xi + yj + zk$). Faça as contas (não é preciso usar coordenadas) e mostre que

$$R\vec{v} = q\vec{v}q'.$$

Assim, rotações são reduzidas a multiplicações por quatérnions unitários. Não chega a ser grande coisa, mas simplifica um pouco a vida, quando se trata de compor rotações. De fato, se $q_1$ e $q_2$ correspondem às rotações $R_1$ e $R_2$, dadas, respectivamente, por ângulos $\theta_1$ e $\theta_2$ e eixos $\vec{u}_1$ e $\vec{u}_2$, então a composta $R = R_1R_2$ é dada por

$$R\vec{v} = R_1(R_2\vec{v}) = q_1(q_2\vec{v}q'_2)q'_1 = q\vec{v}q'$$

com $q = q_1q_2$. Como o produto de quatérnions unitários é um quatérnion unitário, segue um resultado não tão evidente.

Proposição: A composta de duas rotações em torno de eixos passando por um mesmo ponto $O$ é uma rotação em torno de eixo passando por $O$.

Demonstração: ■