its **target**, also called its **codomain**. The **range** or **image** of $f$ is the subset of the target

$$\{b \in B : \text{there exists at least one element } a \in A \text{ with } f(a) = b\}.$$

See Figure 13.

**Figure 13** The domain, target, and range of a function

Try to write $f$ instead of $f(x)$ to denote a function. The function is the device which when confronted with input $x$ produces output $f(x)$. The function is the device, not the output.

Think also of a function dynamically. At time zero all the elements of $A$ are sitting peacefully in $A$. Then the function applies itself to them and throws them into $B$. At time one all the elements that were formerly in $A$ are now transferred into $B$. Each $a \in A$ gets sent to some element $f(a) \in B$.

A mapping $f : A \rightarrow B$ is an **injection** (or is **one-to-one**) if for each pair of distinct elements $a, a' \in A$, the elements $f(a), f(a')$ are distinct in $B$. That is,

$$a \neq a' \implies f(a) \neq f(a').$$

The mapping $f$ is a **surjection** (or is **onto**) if for each $b \in B$ there is at least one $a \in A$ such that $f(a) = b$. That is, the range of $f$ is $B$.