Proof If $c = 0$ the function is constantly equal to 0 and is therefore continuous. If $c \neq 0$ and $\epsilon > 0$ is given, choose $\delta = \epsilon / |c|$. If $|x - y| < \delta$ then

$$|\text{Mult}_c(x) - \text{Mult}_c(y)| = |c| |x - y| < |c| \delta = \epsilon$$

which shows that $\text{Mult}_c$ is continuous.

Proof of Theorem 59 We use the preservation of sequential convergence criterion for continuity. It’s simplest. Let $(x_n, y_n) \to (x, y)$ as $n \to \infty$.

By the triangle inequality we have

$$|\text{Sum}(x_n, y_n) - \text{Sum}(x, y)| \leq |x_n - x| + |y_n - y| = d_{\text{sum}}((x_n, y_n), (x, y)).$$

By Corollary 21 $d_{\text{sum}}$ is continuous, so $d_{\text{sum}}((x_n, y_n), (x, y)) \to 0$ as $n \to \infty$, which completes the proof that Sum is continuous. (By Theorem 17 it does not matter which metric we use on $\mathbb{R} \times \mathbb{R}$.)

Subtraction is the composition of continuous functions

$$\text{Sub}(x, y) = \text{Sum} \circ (\text{id} \times \text{Mult}_{-1})(x, y)$$

and is therefore continuous. (Proposition 3 implies id is continuous, Lemma 60 implies $\text{Mult}_{-1}$ is continuous, and Corollary 18 implies id $\times \text{Mult}_{-1}$ is continuous.)

Multiplication is continuous since

$$|\text{Mult}(x_n, y_n) - \text{Mult}(x, y)| = |x_n y_n - xy|$$

$$\leq |x_n - x| |y_n| + |x| |y_n - y|$$

$$\leq B(|x - x_n| + |y - y_n|)$$

$$= \text{Mult}_B(d_{\text{sum}}((x_n, y_n), (x, y))) \to 0$$

as $n \to \infty$, where we use the fact that convergent sequences are bounded to write $|y_n| + |x| \leq B$ for all $n$.

Reciprocation is the function Rec : $\mathbb{R} \setminus \{0\} \to \mathbb{R} \setminus \{0\}$ that sends $x$ to $1/x$. If $x_n \to x \neq 0$ then there is a constant $b > 0$ such that for all large $n$ we have $|1/x_n| \leq b$ and $|1/x| \leq b$. Since

$$|\text{Rec}(x_n) - \text{Rec}(x)| = \left| \frac{1}{x_n} - \frac{1}{x} \right| = \frac{|x_n - x|}{|xx_n|} \leq \text{Mult}_{b^2}(|x_n - x|) \to 0$$

as $n \to \infty$ we see that Rec is continuous.

Division is continuous on $\mathbb{R} \times (\mathbb{R} \setminus \{0\})$ since it is the composite of continuous mappings $\text{Mult} \circ (\text{id} \times \text{Rec}) : (x, y) \mapsto (x, 1/y) \mapsto x \cdot 1/y$.