For $d\omega = \text{div} F \, dx \wedge dy \wedge dz$.

Finally, the **curl** of a vector field $F = (f, g, h)$ is the vector field

$$\left(h_y - g_z, f_z - h_x, g_x - f_y\right).$$

Applying Stokes’ Formula to the form $\omega = f \, dx + g \, dy + h \, dz$ gives

$$\int_S \left(h_y - g_z\right) dy \wedge dz + \left(f_z - h_x\right) dz \wedge dx + \left(g_x - f_y\right) dx \wedge dy$$

$$= \int_C f \, dx + g \, dy + h \, dz$$

where $S$ is a surface bounded by the closed curve $C$. The first integral is the total curl across $S$, while the second is the circulation of $F$ at the boundary. Their equality is **Stokes’ Curl Theorem**. See Corollaries 50 and 51 for further vector calculus results.

**Closed Forms and Exact Forms**

A form is **closed** if its exterior derivative is zero. It is **exact** if it is the exterior derivative of some other form. Since $d^2 = 0$, every exact form is closed:

$$\omega = d\alpha \Rightarrow d\omega = d(d\alpha) = 0.$$

When is the converse true? That is, when can we antidifferentiate a closed form $\omega$ and find $\alpha$ such that $\omega = d\alpha$? If the forms are defined on $\mathbb{R}^n$ then the answer “always” is the Poincaré Lemma. See below. But if the forms are defined on some subset $U$ of $\mathbb{R}^n$, and if they do not extend to smooth forms defined on all of $\mathbb{R}^n$, then the answer depends on the topology of $U$.

There is one case that should be familiar from calculus: Every closed 1-form $\omega = f \, dx + g \, dy$ on $\mathbb{R}^2$ is exact. See Exercise 58. With more work the result holds for every $U \subset \mathbb{R}^n$ that is **simply connected** in the sense that each closed curve in $U$ can be continuously shrunk to a point in $U$ without leaving $U$.

If $U \subset \mathbb{R}^2$ is not simply connected then there are 1-forms on it that are closed but not exact. The standard example is

$$\omega = \frac{-y}{r^2} dx + \frac{x}{r^2} dy$$

where $r^2 = x^2 + y^2$. Its domain of definition is the “punctured plane” $\mathbb{R}^2 \setminus \{O\}$. See Exercise 65.