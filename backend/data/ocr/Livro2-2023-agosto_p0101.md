Figura 11.2:

$$\begin{vmatrix}
x_1 & y_1 & z_1 \\
x_2 & y_2 & z_2 \\
x_3 & y_3 & z_3
\end{vmatrix} = \begin{vmatrix}
x_1 & x_2 & x_3 \\
y_1 & y_2 & y_3 \\
z_1 & z_2 & z_3
\end{vmatrix}.$$

Agora sim, podemos acreditar que

$$\text{volume de } p = <\vec{u}, \vec{v} \otimes \vec{w} > = \det(\vec{u}, \vec{v}, \vec{w}).$$

Exercício 11.9 Suponha que $\vec{u}$ e $\vec{v} \otimes \vec{w}$ estão do mesmo lado em relação ao plano $\alpha$. Construa uma deformação entre as bases ordenadas $(\vec{u}, \vec{v}, \vec{w})$ e $(\vec{v} \otimes \vec{w}, \vec{v}, \vec{w})$.

11.5 O módulo

Dado um quaternion $q = t + xi + yj + zk$, seu módulo é, naturalmente, definido por

$$|q| = \sqrt{t^2 + x^2 + y^2 + z^2}.$$

Um quaternion de módulo igual a 1 é dito unitário. Chamando $xi + yj + zk$ de $\vec{v}$ e definindo o conjugado de $q = t + \vec{v}$ por $q' = t - \vec{v}$, temos

$$|q|^2 = t^2 + |\vec{v}|^2 = qq'.$$

Daí decorre que todo quaternion $q$ não nulo tem por inverso multiplicativo o quaternion $q^{-1}$ dado por

$$q^{-1} = \frac{q'}{|q|^2}.$$