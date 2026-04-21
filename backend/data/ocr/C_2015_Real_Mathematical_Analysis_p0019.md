(4) is a true statement but (5) is false. A quantifier modifies the part of a sentence that follows it but not the part that precedes it. This is another reason never to end with a quantifier.

**Moral** Quantifier order is crucial.

There is a point at which English and mathematical meaning diverge. It concerns the word “or.” In mathematics “a or b” always means “a or b or both a and b,” while in English it can mean “a or b but not both a and b.” For example, Patrick Henry certainly would not have accepted both liberty and death in response to his cry of “Give me liberty or give me death.” In mathematics, however, the sentence “17 is a prime or 23 is a prime” is correct even though both 17 and 23 are prime. Similarly, in mathematics $a \Rightarrow b$ means that if $a$ is true then $b$ is true but that $b$ might also be true for reasons entirely unrelated to the truth of $a$. In English, $a \Rightarrow b$ is often confused with $b \Rightarrow a$.

**Moral** In mathematics “or” is inclusive. It means and/or. In mathematics $a \Rightarrow b$ is not the same as $b \Rightarrow a$.

It is often useful to form the negation or logical opposite of a mathematical sentence. The symbol $\sim$ is usually used for negation, despite the fact that the same symbol also indicates an equivalence relation. Mathematicians refer to this as an *abuse of notation*. Fighting a losing battle against abuse of notation, we write $\neg$ for negation. For example, if $m, n \in \mathbb{N}$ then $\neg(m < n)$ means it is not true that $m$ is less than $n$. In other words

$$\neg(m < n) \equiv m \geq n.$$

(We use the symbol $\equiv$ to indicate that the two statements are equivalent.) Similarly, $\neg(x \in A)$ means it is not true that $x$ belongs to $A$. In other words,

$$\neg(x \in A) \equiv x \notin A.$$

Double negation returns a statement to its original meaning. Slightly more interesting is the negation of “and” and “or.” Just for now, let us use the symbols $\&$ for “and” and $\vee$ for “or.” We claim

(6) $$\neg(a \& b) \equiv \neg a \vee \neg b.$$

(7) $$\neg(a \vee b) \equiv \neg a \& \neg b.$$