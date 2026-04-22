23. Use Exercise 22 and the $n$-dimensional Mean Value Theorem to prove that a diffeomorphism $T : U \to V$ is a meseomorphism. [Pay attention to the fact that $U$ and $V$ are noncompact.]

24. (a) If $T : \mathbb{R} \to \mathbb{R}$ is a continuous meseometry prove that $T$ is rigid.
   (b) What if $T$ is discontinuous?
   (c) Find a continuous nonrigid meseometry $T : \mathbb{R}^2 \to \mathbb{R}^2$. [Hint: Divergence.]

25. Let $f : \mathbb{R} \to [0, \infty)$ be given.
   (a) If $f$ is measurable why is the graph of $f$ a zero set?
   (b) If the graph of $f$ is a zero set does it follow that $f$ is measurable?
   **(c) Read about transfinite induction and go to stackexchange to see that there exists a nonmeasurable function $f : [a, b] \to [0, \infty)$ whose graph is nonmeasurable.
   (d) Infer that the measurability hypothesis in the Zero Slice Theorem (Theorem 26) is necessary since every vertical slice graph of the function in (c) is a zero set (it is just a single point) and yet the graph has positive outer measure.
   (e) Why can a graph never have positive inner measure?
   (f) How does (c) yield an example of uncountably many disjoint subsets of the plane, each with infinite outer measure?
   (g) What assertion can you make from (f) and Exercise 19?

26. Theorem 35 states that $T_f$ is a meseometry when $f : \mathbb{R} \to [0, \infty)$ is integrable. Prove the same thing when $f : \mathbb{R} \to [0, \infty)$ is measurable. What about a measurable function $\mathbb{R}^n \to \mathbb{R}$? [Hint: Express $f$ as $\sum_{i,k} f_{i,k}$, where the support of $f_{i,k}$ is $[i-1,i) \cap f^{\text{pre}}([k-1,k))$. Why is $f_{i,k}$ integrable and how does this imply that $T_f$ is a meseometry?]

27. Using the undergraph definition, check linearity of the integral directly for the two measurable characteristic functions, $f = \chi_F$ and $g = \chi_G$.

28. The **total undergraph** of $f : \mathbb{R} \to \mathbb{R}$ is $\mathcal{U}f = \{(x,y) : y < f(x)\}$.
   (a) Using undergraph pictures, show that the total undergraph is measurable if and only if the positive and negative parts of $f$ are measurable.
   (b) Suppose that $f : \mathbb{R} \to (0, \infty)$ is measurable. Prove that $1/f$ is measurable. [Hint: The diffeomorphism $T : (x,y) \mapsto (x,1/y)$ sends $\mathcal{U}f$ to $\mathcal{U}(1/f)$.]
   (c) Suppose that $f,g : \mathbb{R} \to (0, \infty)$ are measurable. Prove that $f \cdot g$ is measurable. [Hint: $T : (x,y) \mapsto (x,\log y)$ sends $\mathcal{U}f$ and $\mathcal{U}g$ to $\mathcal{U}(\log f)$ and $\mathcal{U}(\log g)$. How does this imply $\log fg$ is measurable, and how does use of $T^{-1} : (x,y) \mapsto (x,e^y)$ complete the proof?]
   (d) Remove the hypotheses in (a)-(c) that the domain of $f,g$ is $\mathbb{R}$.
   (e) Generalize (c) to the case that $f,g$ have both signs.