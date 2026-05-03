Capítulo 15

Mudanças de base

15.1 Um exemplo

Exemplo 1: Rotação. Suponhamos dados um vetor não nulo, $\vec{\epsilon}$, e um ângulo, $\theta$. Queremos expressar a rotação $R$, de ângulo $\theta$, em torno da reta que passa pela origem e tem direção $\vec{\epsilon}$. Supomos que $\vec{\epsilon}$ seja dado por suas coordenadas na base canônica, $(a, b, c)$. Para simplificar (e não retornar a um caso já tratado), suporemos $a^2 + b^2 + c^2 = 1$ e $\vec{\epsilon} \neq (0, 0, 1)$.

Nossa primeira observação é: se tivermos dois outros vetores, $\vec{\epsilon}_1$ e $\vec{\epsilon}_2$, unitários, ortogonais a $\vec{\epsilon}$ e ortogonais entre si (e, se não for pedir muito, tais que a base $(\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon})$ tenha orientação positiva), então, escolhendo o sentido trigonométrico para a rotação, teremos:

$$R\vec{\epsilon}_1 = \cos \theta\vec{\epsilon}_1 + \sin \theta\vec{\epsilon}_2, \quad R\vec{\epsilon}_2 = -\sin \theta\vec{\epsilon}_1 + \cos \theta\vec{\epsilon}_2, \quad R\vec{\epsilon} = \vec{\epsilon}.$$

Exercício 15.1 Entenda isso. Note que nada muda, se trocarmos a exigência $\vec{\epsilon}_1$ e $\vec{\epsilon}_2$ unitários para $|\vec{\epsilon}_1| = |\vec{\epsilon}_2| \neq 0$.

Exercício 15.2 Encontre $\vec{\epsilon}_1$ e $\vec{\epsilon}_2$, unitários, ortogonais a $\vec{\epsilon}$ e ortogonais entre si (e, abusando um pouco, tais que a base $(\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon})$ tenha orientação positiva). Exiba as coordenadas de $\vec{\epsilon}_1$ e $\vec{\epsilon}_2$ na base canônica. Sugestão: comece com $\vec{\epsilon}_1 = (a^2 + b^2)^{-1/2}(-b, a, 0)$; faça $\vec{\epsilon}_2 = \vec{\epsilon} \otimes \vec{\epsilon}_1$.

Suponhamos, pois, que temos nossos vetores $\vec{\epsilon}_1$ e $\vec{\epsilon}_2$ como acima. Se $\vec{v} = y_1\vec{\epsilon}_1 + y_2\vec{\epsilon}_2 + y_3\vec{\epsilon}$, então

$$R\vec{v} = y_1R\vec{\epsilon}_1 + y_2R\vec{\epsilon}_2 + y_3R\vec{\epsilon} = y_1(\cos \theta\vec{\epsilon}_1 + \sin \theta\vec{\epsilon}_2) + y_2(-\sin \theta\vec{\epsilon}_1 + \cos \theta\vec{\epsilon}_2) + y_3\vec{\epsilon},$$

ou seja,

$$R\vec{v} = (y_1\cos \theta - y_2\sin \theta)\vec{\epsilon}_1 + (y_1\sin \theta + y_2\cos \theta)\vec{\epsilon}_2 + y_3\vec{\epsilon}.$$

Podemos, então, concluir que, dadas as coordenadas $(y_1, y_2, y_3)$ de $\vec{v}$ na base $\alpha = (\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon})$, as correspondentes coordenadas $(y'_1, y'_2, y'_3)$ de $R\vec{v}$, na mesma base $\alpha$, serão dadas por