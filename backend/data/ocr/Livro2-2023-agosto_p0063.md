8.3: Projeções e complemento ortogonais

$$t_1 = \langle \vec{w}_0, \vec{\epsilon}_1 \rangle, \ t_2 = \langle \vec{w}_0, \vec{\epsilon}_2 \rangle$$

Mas

$$\langle \vec{w}, \vec{\epsilon} \rangle = \langle \vec{w}_0 + \vec{w}_1, \vec{\epsilon} \rangle = \langle \vec{w}_0, \vec{\epsilon} \rangle + \langle \vec{w}_1, \vec{\epsilon} \rangle = \langle \vec{w}_0, \vec{\epsilon} \rangle \quad \forall \vec{\epsilon} \in \alpha.$$

Daí segue $t_1 = \langle \vec{w}, \vec{\epsilon}_1 \rangle, \ t_2 = \langle \vec{w}, \vec{\epsilon}_2 \rangle$.

Exercício 8.2 Note que, se $\vec{w} \notin \alpha$, obtemos, fazendo

$$\vec{\epsilon}_3 = \frac{1}{|\vec{w}_1|} \vec{w}_1,$$

uma base ortonormal, $\{\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon}_3\}$, para o espaço $V$, com dois vetores em $\alpha$.

Observação: O processo que acabamos de ver (chamado processo de ortogonalização de Gram-Schmidt), constrói uma base ortonormal para o subespaço $\alpha$ a partir de uma base dada. Se pensarmos os vetores originalmente fornecidos, $\vec{u}, \vec{v}$ e $\vec{w}$, como uma base para $V$, o processo nos fornece uma base ortonormal para $V$, sem fazer qualquer referência à base canônica. Pode parecer pouco interessante no momento... Num contexto mais geral, porém, esta é uma ideia simples mas fundamental.

8.3 Projeções e complemento ortogonais

Seja $W$ um subespaço de $V$ e $\vec{v}$ um vetor de $V$. A projeção ortogonal de $\vec{v}$ em $W$ é o elemento $\vec{v}_0$ de $W$ tal que

$$|\vec{v} - \vec{v}_0| \leq |\vec{v} - \vec{w}| \quad \forall \vec{w} \in W.$$

Proposição: A projeção ortogonal $\vec{v}_0$ de $\vec{v}$ em $W$ existe, é única e satisfaz

$$< \vec{v} - \vec{v}_0, \vec{w} > = 0 \quad \forall \vec{w} \in W.$$

Demonstração: Se $W = \{0\}$, é só tomar $\vec{v} = \vec{0}$; se $W = V$, tomamos $\vec{v}_0 = \vec{v}$. Se $W$ é gerado por $\vec{\epsilon}_1$, com $|\vec{\epsilon}_1| = 1$, tome $\vec{v}_0 = \langle \vec{v}, \vec{\epsilon}_1 \rangle > \vec{\epsilon}_1$; se $W$ é gerado por $\vec{\epsilon}_1$ e $\vec{\epsilon}_2$, com $|\vec{\epsilon}_1| = |\vec{\epsilon}_2| = 1$ e $< \vec{\epsilon}_1, \vec{\epsilon}_2 > = 0$, tome $\vec{v}_0 = \langle \vec{v}, \vec{\epsilon}_1 \rangle > \vec{\epsilon}_1 + \langle \vec{v}, \vec{\epsilon}_2 \rangle > \vec{\epsilon}_2$. Confira.

Exercício 8.3 Seja $X$ um subconjunto de $V$ e seja

$$X^\perp = \{ \vec{v} \in V \mid \langle \vec{v}, \vec{u} \rangle = 0 \quad \forall \vec{u} \in X \}.$$

Mostre que $X^\perp$ é um subespaço vetorial.

Suponhamos que $W$ seja um subespaço vetorial de $V$. Seja

$$W^\perp = \{ \vec{v} \in V \mid \langle \vec{v}, \vec{w} \rangle = 0 \quad \forall \vec{w} \in W \}.$$

$W^\perp$ é chamado de complemento ortogonal de $W$.