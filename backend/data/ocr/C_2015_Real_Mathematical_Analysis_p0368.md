In fact the integral is the volume of $B$. However, we also have

$$\int_{\varphi} d\alpha = \int_{\partial\varphi} \alpha \quad \text{by Stokes’ Theorem on a cell}$$
$$= \int_{\partial\varphi} T^*\alpha \quad \text{by Equation (27)}$$
$$= \int_{\varphi} dT^*\alpha \quad \text{by Stokes’ Theorem on a cell}$$
$$= \int_{\varphi} T^*d\alpha \quad \text{by (d) in Theorem 43}$$
$$= 0 \quad \text{by Step 2.}$$

This is a contradiction – an integral can not simultaneously be zero and positive. The assumption that there exists a continuous $F : B \to B$ with no fixed-point has led to a contradiction. Therefore it is untenable and every $F$ does have a fixed-point. $\square$

Appendix A  Perorations of Dieudonné

In his classic book, *Foundations of Analysis*, Jean Dieudonné of the French Bourbaki school writes

“The subject matter of this Chapter [Chapter VIII on differential calculus] is nothing else but the elementary theorems of Calculus, which however are presented in a way which will probably be new to most students. That presentation which throughout adheres strictly to our general ‘geometric’ outlook on Analysis, aims at keeping as close as possible to the fundamental idea of Calculus, namely the local approximation of functions by linear functions. In the classical teaching of Calculus, this idea is immediately obscured by the accidental fact that, on a one-dimensional vector space, there is a one-to-one correspondence between linear forms and numbers, and therefore the derivative at a point is defined as a number instead of a linear form. This slavish subservience to the shibboleth of numerical interpretation at any cost becomes much worse when dealing with functions of several variables: One thus arrives, for instance, at the classical formula”… “giving the partial derivatives of a composite function, which has lost any trace of intuitive meaning, whereas the natural statement of the theorem is of course that the (total) derivative of a composite function