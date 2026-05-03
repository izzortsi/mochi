Demonstração: Se um dos dois vetores é nulo, vale claramente a igualdade. Podemos, então, supor que são ambos não nulos e definir

$$u_o = \frac{\langle u, v \rangle}{\langle v, v \rangle} v.$$

Temos, então,

$$\langle u - u_o, v \rangle = \langle u, v \rangle - \langle u_o, v \rangle = \langle u, v \rangle - \frac{\langle u, v \rangle}{\langle v, v \rangle} \langle v, v \rangle = 0.$$

Daí decorre $\langle u - u_o, u_o \rangle = 0$, o que, por Pitágoras, nos dá $|u|^2 = |u_o|^2 + |u - u_o|^2 \ge |u_o|^2$, ou seja, $|u| \ge |u_o|$. Isso significa

$$|u| \ge \left| \frac{\langle u, v \rangle}{\langle v, v \rangle} v \right| = \frac{| \langle u, v \rangle |}{|v|^2} |v| = \frac{| \langle u, v \rangle |}{|v|},$$

que é nossa desigualdade.

**Observação:** A desigualdade de Cauchy-Schwarz-Buniacóvski poderia ser, mais simplesmente, chamada de **desigualdade do cosseno**. De fato, CSB expressa o fato de que aquilo que chamamos de **cosseno** do ângulo entre $u e v$,

$$\frac{\langle u, v \rangle}{|u||v|},$$

é um número entre -1 e 1.

**Exercício 7.11** Sejam $u e v$ vetores fixados. Use o fato de que, para todo real $t$, vale $|u - tv|^2 \ge 0$, expresse $|u - tv|^2$ como um trinômio do segundo grau em $t$ e de uma outra demonstração, de inspiração puramente algébrica, para a desigualdade de Cauchy-Schwarz-Buniacóvski.

**Exercício 7.12** Note que a igualdade, em CSB, só pode ocorrer se $u = 0$, $v = 0$ ou $u - u_o = 0$, ou seja, se $u e v$ forem linearmente dependentes.

A desigualdade CSB tem como consequência a **desigualdade triangular**: $|u + v| \le |u| + |v|$.

**Corolário (Desigualdade Triangular):** Sejam $u e v$ dois vetores. Então

$$|u + v| \le |u| + |v|.$$

Supondo $v$ não nulo, a igualdade $|u + v| = |u| + |v|$ ocorre se, e somente se, existe um real estritamente positivo, $t$, tal que $u = tv$.

Demonstração: A desigualdade decorre imediatamente de CSB:

$$|u + v|^2 = \langle u + v, u + v \rangle = |u|^2 + |v|^2 + 2 \langle u, v \rangle \le |u|^2 + |v|^2 + 2 |u||v| = (|u| + |v|)^2.$$

Por outro lado, temos, se vale a igualdade,

$$|u|^2 + |v|^2 + 2 \langle u, v \rangle = |u + v|^2 = (|u| + |v|)^2 = |u|^2 + |v|^2 + 2 |u||v|.$$