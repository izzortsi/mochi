Comecemos observando que, como $f(0) = 0$, $f$ preserva norma (já que $|f(u)| = |f(u) - f(0)|$).

Daí vem

$$|f(u)|^2 + |f(v)|^2 - 2 \langle f(u), f(v) \rangle = |f(u) - f(v)|^2 =$$
$$= |u - v|^2 = |u|^2 + |v|^2 - 2 \langle u, v \rangle.$$

Logo, temos $\langle f(u), f(v) \rangle = \langle u, v \rangle$ (entenda isso como triângulos de lados congruentes têm ângulos correspondentes também congruentes, o que implica em dizer que a preservação de distâncias nos dá a preservação de ângulos). Daí vem:

$$|f(u + tv) - (f(u) + tf(v))|^2 =$$
$$= \langle f(u + tv) - (f(u) + tf(v)), f(u + tv) - (f(u) + tf(v)) \rangle =$$
$$|f(u + tv) - f(u)|^2 + t^2 |f(v)|^2 - 2t \langle f(u + tv) - f(u), f(v) \rangle =$$
$$|(u + tv) - u|^2 + t^2 |v|^2 - 2t \langle (u + tv) - u, v \rangle = 0,$$

o que prova que $f(u + tv) = f(u) + tf(v)$.

**Exercício 12.32** Note que a mesma demonstração se aplica a espaços vetoriais complexos (trocando $\langle, \rangle$ por Re $\langle, \rangle$ quando necessário).

Transformações preservando distâncias são ditas **isométricas**. Bijeções preservando distâncias são chamadas de **isometrias**.

**Exercício 12.33** Observe que, pelo que acabamos de ver, transformações isométricas entre espaços vetoriais com produto interno são, a menos de translações, lineares (isto é: se $|f(u) - f(v)| = |u - v| \forall u, v \in V_1$), então existem $w_o \in V_2$ e $T: V_1 \rightarrow V_2$ linear tais que $f(u) = w_o + Tu \forall u \in V_1$).

Se $T$ é uma transformação linear de um espaço vetorial com produto interno, $V$, em si mesmo, a preservação de distâncias é, como acabamos de ver, equivalente à preservação do produto interno.

**Exercício 12.34** Suponha que $V$ é espaço vetorial de dimensão finite, com produto interno $e$ que $T: V \rightarrow V$ é linear. Mostre que são equivalentes:

(i) $|Tu| = |u| \forall u \in V$;
(ii) $\langle Tu, Tv \rangle = \langle u, v \rangle \forall u, v \in V$;
(iii) $T$ transforma bases ortonormais de $V$ em bases ortonormais de $V$;
(iv) $T$ transforma alguma base ortonormal de $V$ em uma base ortonormal de $V$.

**Definição:** Seja $V$ um espaço vetorial com produto interno. Uma transformação linear bijetiva $T: V \rightarrow V$ é dita **ortogonal** se $\langle Tu, Tv \rangle = \langle u, v \rangle$ para quaisquer $u e v$ em $V$.