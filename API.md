# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FilePublisher <a name="FilePublisher" id="awscdk-construct-file-publisher.FilePublisher"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-file-publisher.FilePublisher.Initializer"></a>

```typescript
import { FilePublisher } from 'awscdk-construct-file-publisher'

new FilePublisher(scope: Construct, id: string, __2: FilePublisherProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-file-publisher.FilePublisher.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-file-publisher.FilePublisher.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-file-publisher.FilePublisher.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-file-publisher.FilePublisherProps">FilePublisherProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-file-publisher.FilePublisher.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-file-publisher.FilePublisher.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-file-publisher.FilePublisher.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-file-publisher.FilePublisherProps">FilePublisherProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-file-publisher.FilePublisher.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-file-publisher.FilePublisher.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-file-publisher.FilePublisher.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-file-publisher.FilePublisher.isConstruct"></a>

```typescript
import { FilePublisher } from 'awscdk-construct-file-publisher'

FilePublisher.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-file-publisher.FilePublisher.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-file-publisher.FilePublisher.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-file-publisher.FilePublisher.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-file-publisher.FilePublisher.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `url`<sup>Required</sup> <a name="url" id="awscdk-construct-file-publisher.FilePublisher.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### FilePublisherProps <a name="FilePublisherProps" id="awscdk-construct-file-publisher.FilePublisherProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-file-publisher.FilePublisherProps.Initializer"></a>

```typescript
import { FilePublisherProps } from 'awscdk-construct-file-publisher'

const filePublisherProps: FilePublisherProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-file-publisher.FilePublisherProps.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `path`<sup>Required</sup> <a name="path" id="awscdk-construct-file-publisher.FilePublisherProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---



