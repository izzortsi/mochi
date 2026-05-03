Exercício 7.9 Sejam A, B e C três pontos de E. Considere o triângulo ABC. Faça u = B – A e v = C – B. Note que C – A = u + v e que se o ângulo em B é reto, então $\langle u, v \rangle = 0$.

Teorema de Pitágoras: Se u e v são vetores de E tais que $\langle u, v \rangle = 0$, então

$$|u + v|^2 = |u|^2 + |v|^2.$$

Demonstração: $|u + v|^2 = \langle u + v, u + v \rangle = \langle u, u \rangle + \langle v, v \rangle + 2 \langle u, v \rangle = |u|^2 + |v|^2 + 0.$

Nossa definição de cosseno inspira a introdução da projeção de um vetor na direção de outro.

Figura 7.2:

Se u e v são dois vetores em E, com $|v| = 1$, podemos projetar u na direção de v, obtendo

$$u_0 = \langle u, v \rangle v.$$

Se v não é unitário, mas é não nulo, ainda podemos projetar u na direção de v, fazendo

$$u_0 = \left\langle u, \frac{1}{|v|} v \right\rangle \frac{1}{|v|} v = \frac{1}{|v|^2} \langle u, v \rangle v = \frac{\langle u, v \rangle}{\langle v, v \rangle} v.$$

Se nossas fantasias geométricas fazem sentido, o triângulo de vértices 0, $u_0$ e u tem um ângulo reto em $u_0$.

Exercício 7.10 Mostre que $\langle u - u_0, u_0 \rangle = 0$.

Uma consequência óbvia do Teorema de Pitágoras é o seguinte fato: a hipotenuza é maior que os catetos. No caso das projeções, isso se traduz por $|u| \ge |u_0|$ e recebe um nome pomposo.

Desigualdade de Cauchy-Schwarz-Buniacóvski:

$$|\langle u, v \rangle| \le |u||v| \forall u, v \in E.$$