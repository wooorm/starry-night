// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.coq'],
  extensionsWithDot: ['.v'],
  names: ['coq'],
  patterns: [
    {include: '#multilinecomment'},
    {
      begin: '\\b(Proof)\\.',
      beginCaptures: {1: {name: 'keyword.coq'}},
      end: '\\b(Qed|Defined|Abort|Admitted|Abort All)\\.',
      endCaptures: {1: {name: 'keyword.coq'}},
      name: 'proof.coq'
    },
    {
      captures: {1: {name: 'variable.coq'}},
      match:
        '\\b(Axiom|Conjecture|Parameter|Parameters|Variable|Variables|Hypothesis|Hypotheses|Definition|Let|Fixpoint|CoFixpoint|Inductive|CoInductive|Remark|Fact|Corollary|Proposition|Example|Module|Theorem|Lemma|Class|Instance|Context)\\b'
    },
    {
      captures: {1: {name: 'keyword.coq'}},
      match:
        '\\b(Abort|About|Add|Admit|Admitted|All|Arguments|as|Assumptions|Axiom|Back|BackTo|Backtrack|Bind|Blacklist|Canonical|Cd|Check|Class|Classes|Close|Coercion|Coercions|cofix|CoFixpoint|CoInductive|Collection|Combined|Compute|Conjecture|Conjectures|Constant|constr|Constraint|Constructors|Context|Corollary|CreateHintDb|Cumulative|Cut|Declare|Defined|Definition|Delimit|Dependencies|Dependent|Derive|Drop|eauto|else|end|End|Equality|Eval|Example|Existential|Existentials|Existing|Export|exporting|Extern|Extract|Extraction|Fact|Fail|Field|Fields|File|fix|Fixpoint|Focus|for|forall|From|fun|Function|Functional|Generalizable|Global|Goal|Grab|Grammar|Graph|Guarded|Heap|Hint|HintDb|Hints|Hypotheses|Hypothesis|Identity|if|If|Immediate|Implicit|Import|in|Include|Inductive|Infix|Info|Initial|Inline|Inspect|Instance|Instances|Intro|Intros|Inversion|Inversion_clear|Language|Left|Lemma|let|Let|Libraries|Library|Load|LoadPath|Local|Locate|Ltac|match|Match|ML|Mode|Module|Modules|Monomorphic|Morphism|Next|NoInline|NonCumulative|Notation|Obligation|Obligations|Opaque|Open|Optimize|Options|Parameter|Parameters|Parametric|Path|Paths|pattern|Polymorphic|Preterm|Print|Printing|Profile|Program|Projections|Proof|Prop|Proposition|Pwd|Qed|Quit|Rec|Record|Recursive|Redirect|Relation|Remark|Remove|Require|Reserved|Reset|Resolve|Restart|return|Rewrite|Right|Ring|Rings|Scheme|Scope|Scopes|Script|Search|SearchAbout|SearchHead|SearchPattern|SearchRewrite|Section|Separate|Set|Setoid|Show|Signatures|Solve|Sorted|Step|Strategies|Strategy|struct|Structure|SubClass|Table|Tables|Tactic|Term|Test|then|Theorem|Time|Timeout|Transparent|Type|Typeclasses|Types|Undelimit|Undo|Unfocus|Unfocused|Unfold|Universe|Universes|Unset|Unshelve|using|Variable|Variables|Variant|Verbose|View|Visibility|where|with)\\b'
    },
    {match: ':.*?[,.]', name: 'type.coq'}
  ],
  repository: {
    multilinecomment: {
      begin: '\\(\\*',
      contentName: 'comment.coq',
      end: '\\*\\)',
      name: 'comment.coq',
      patterns: [{include: '#multilinecomment', name: 'comment.coq'}]
    }
  },
  scopeName: 'source.coq'
}

export default grammar
