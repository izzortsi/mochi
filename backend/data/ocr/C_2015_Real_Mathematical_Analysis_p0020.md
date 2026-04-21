For if it is not the case that both $a$ and $b$ are true then at least one must be false. This proves (6), and (7) is similar. Implication also has such interpretations:

(8) $a \Rightarrow b \equiv \neg a \Leftarrow \neg b \equiv \neg a \lor b$.

(9) $\neg(a \Rightarrow b) \equiv a \& \neg b$.

What about the negation of a quantified sentence such as

$\neg(\forall n \in \mathbb{N}, \exists p \in P \text{ such that } n < p)$.

The rule is: change each $\forall$ to $\exists$ and vice versa, leaving the order the same, and negate the assertion. In this case the negation is

$\exists n \in \mathbb{N}, \forall p \in P, n \geq p$.

In English it reads “There exists a natural number $n$, and for all primes $p$ we have $n \geq p$.” The sentence has correct mathematical grammar but of course is false. To help translate from mathematics to readable English, a comma can be read as “and,” “we have,” or “such that.”

All mathematical assertions take an implication form $a \Rightarrow b$. The hypothesis is $a$ and the conclusion is $b$. If you are asked to prove $a \Rightarrow b$, there are several ways to proceed. First you may just see right away why $a$ does imply $b$. Fine, if you are so lucky. Or you may be puzzled. Does $a$ really imply $b$? Two routes are open to you. You may view the implication in its equivalent contrapositive form $\neg a \Leftarrow \neg b$ as in (8). Sometimes this will make things clearer. Or you may explore the possibility that $a$ fails to imply $b$. If you can somehow deduce from the failure of $a$ implying $b$ a contradiction to a known fact (for instance, if you can deduce the existence of a planar right triangle with legs $x, y$ but $x^2 + y^2 \neq h^2$, where $h$ is the hypotenuse), then you have succeeded in making an argument by contradiction. Clearly (9) is pertinent here. It tells you what it means that $a$ fails to imply $b$, namely that $a$ is true and simultaneously $b$ is false.

Euclid’s proof that $\mathbb{N}$ contains infinitely many prime numbers is a classic example of this method. The hypothesis is that $\mathbb{N}$ is the set of natural numbers and that $P$ is the set of prime numbers. The conclusion is that $P$ is an infinite set. The proof of this fact begins with the phrase “Suppose not.” It means to suppose, after all, that the set of prime numbers $P$ is merely a finite set, and see where this leads you. It does not mean that we think $P$ really is a finite set, and it is not a hypothesis of a theorem. Rather it just means that we will try to find out what awful consequences