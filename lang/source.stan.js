// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/stan-dev/atom-language-stan>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.stan'],
  names: ['stan'],
  patterns: [
    {include: '#comments'},
    {include: '#strings'},
    {include: '#numbers'},
    {
      match:
        '\\b(functions|data|transformed\\s+data|parameters|transformed\\s+parameters|model|generated\\s+quantities)\\b',
      name: 'entity.name.type.stan'
    },
    {
      match:
        '\\b(int|real|complex|array|vector|simplex|unit_vector|ordered|positive_ordered|row_vector|matrix|complex_vector|complex_matrix|complex_row_vector|corr_matrix|cov_matrix|cholesky_factor_cov|cholesky_factor_corr|void)\\b',
      name: 'storage.type.stan'
    },
    {
      match: '\\b(for|in|while|if|else|break|continue)\\b',
      name: 'keyword.control.stan'
    },
    {
      captures: {
        1: {name: 'keyword.other.range.stan'},
        2: {name: 'punctuation.operator.equal.stan'}
      },
      match: '\\b(lower|upper)\\s*(=)'
    },
    {match: '\\breturn\\b', name: 'keyword.other.return.stan'},
    {
      captures: {
        1: {name: 'keyword.other.target.stan'},
        2: {name: 'keyword.operator.accumulator.stan'}
      },
      match: '\\b(target)\\s*([+][=])'
    },
    {match: '\\bT(?=\\s*\\[)', name: 'keyword.other.truncation.stan'},
    {include: '#distributions'},
    {
      match: '\\b(print|reject)\\b',
      name: 'keyword.other.special-functions.stan'
    },
    {
      match: '\\b(integrate_ode_(?:bdf|rk45))\\b',
      name: 'support.function.integrate_ode.stan'
    },
    {
      match: '\\balgebra_solver\\b',
      name: 'support.function.algebra_solver.stan'
    },
    {include: '#functions'},
    {include: '#reserved'},
    {
      match: '\\b([a-zA-Z0-9_]*__|[0-9_][A-Za-z0-9_]+|_)\\b',
      name: 'invalid.illegal.variable'
    },
    {
      match: '\\b[A-Za-z][0-9A-Za-z_]*\\b',
      name: 'variable.other.identifier.stan'
    },
    {include: '#operators'},
    {match: ',', name: 'meta.delimiter.comma.stan'},
    {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.block.begin.stan'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.block.end.stan'}},
      patterns: [{include: '$base'}]
    },
    {match: '[{}]', name: 'meta.brace.curly.stan'},
    {match: '\\[|\\]', name: 'meta.brace.square.stan'},
    {match: '\\(|\\)', name: 'meta.brace.round.stan'},
    {match: '\\;', name: 'punctuation.terminator.statement.stan'},
    {match: '[|]', name: 'punctuation.sampling.bar.stan'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '^\\s*((#)\\s*(include))\\b\\s*',
          beginCaptures: {
            1: {name: 'keyword.control.directive.include.stan'},
            2: {name: 'punctuation.definition.directive.stan'},
            4: {name: 'string.quoted.other.include.stan'}
          },
          end: '\\s*(?=(?://|/\\*|#)|\\n|$)',
          name: 'meta.preprocessor.include.stan',
          patterns: [
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.stan'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.stan'}
              },
              name: 'string.quoted.double.include.stan'
            },
            {
              begin: '<',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.stan'}
              },
              end: '>',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.stan'}
              },
              name: 'string.quoted.other.lt-gt.include.stan'
            },
            {
              begin: "'",
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.stan'}
              },
              end: "'",
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.stan'}
              },
              name: 'string.quoted.single.include.stan'
            },
            {match: '.+', name: 'string.quoted.other.noquote.include.stan'}
          ]
        },
        {
          begin: '/\\*\\*(?!/)',
          captures: {0: {name: 'punctuation.definition.comment.stan'}},
          end: '\\*/',
          name: 'comment.block.documentation.stan',
          patterns: [{include: '#docblock'}]
        },
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.stan'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.stan'}},
          name: 'comment.block.stan'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.stan'}},
          end: '\\n',
          name: 'comment.line.double-slash.stan'
        },
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.stan'}},
          end: '\\n',
          name: 'comment.line.number-sign.stan'
        }
      ]
    },
    distributions: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.sampling.stan'},
            3: {name: 'support.function.distribution.stan'}
          },
          match:
            '(~)(\\s*)(bernoulli|bernoulli_logit|bernoulli_logit_glm|beta|beta_binomial|binomial|binomial_logit|categorical|categorical_logit|categorical_logit_glm|cauchy|chi_square|dirichlet|discrete_range|double_exponential|exp_mod_normal|exponential|frechet|gamma|gaussian_dlm_obs|gumbel|hypergeometric|inv_chi_square|inv_gamma|inv_wishart|inv_wishart_cholesky|lkj_corr|lkj_corr_cholesky|logistic|loglogistic|lognormal|multi_gp|multi_gp_cholesky|multi_normal|multi_normal_cholesky|multi_normal_prec|multi_student_t|multi_student_t_cholesky|multinomial|multinomial_logit|neg_binomial|neg_binomial_2|neg_binomial_2_log|neg_binomial_2_log_glm|normal|normal_id_glm|ordered_logistic|ordered_logistic_glm|ordered_probit|pareto|pareto_type_2|poisson|poisson_log|poisson_log_glm|rayleigh|scaled_inv_chi_square|skew_double_exponential|skew_normal|std_normal|student_t|uniform|von_mises|weibull|wiener|wishart|wishart_cholesky)\\b',
          name: 'meta.sampling.stan'
        },
        {
          captures: {
            1: {name: 'keyword.operator.sampling.stan'},
            3: {name: 'variable.other.distribution.stan'}
          },
          match: '(~)(\\s*)([A-Za-z][A-Za-z0-9_]*)\\b',
          name: 'meta.sampling.stan'
        }
      ]
    },
    docblock: {
      patterns: [
        {
          match: '(?<!\\w)@(param|return)\\b',
          name: 'storage.type.class.standoc'
        }
      ]
    },
    functions: {
      patterns: [
        {
          match:
            '\\b([A-Za-z0-9][A-Za-z0-9_]*_log|binomial_coefficient_log|fabs|get_lp|if_else|increment_log_prob|integrate_ode|lkj_cov|multiply_log)\\b',
          name: 'invalid.deprecated.function.stan'
        },
        {
          match:
            '\\b(Phi|Phi_approx|abs|acos|acosh|add_diag|algebra_solver|algebra_solver_newton|append_array|append_col|append_row|arg|asin|asinh|atan|atan2|atanh|bernoulli_cdf|bernoulli_lccdf|bernoulli_lcdf|bernoulli_logit_glm_lpmf|bernoulli_logit_glm_lupmf|bernoulli_logit_glm_rng|bernoulli_logit_lpmf|bernoulli_logit_lupmf|bernoulli_logit_rng|bernoulli_lpmf|bernoulli_lupmf|bernoulli_rng|bessel_first_kind|bessel_second_kind|beta|beta_binomial_cdf|beta_binomial_lccdf|beta_binomial_lcdf|beta_binomial_lpmf|beta_binomial_lupmf|beta_binomial_rng|beta_cdf|beta_lccdf|beta_lcdf|beta_lpdf|beta_lupdf|beta_proportion_lccdf|beta_proportion_lcdf|beta_proportion_rng|beta_rng|binary_log_loss|binomial_cdf|binomial_coefficient_log|binomial_lccdf|binomial_lcdf|binomial_logit_lpmf|binomial_logit_lupmf|binomial_lpmf|binomial_lupmf|binomial_rng|block|categorical_logit_glm_lpmf|categorical_logit_glm_lupmf|categorical_logit_lpmf|categorical_logit_lupmf|categorical_logit_rng|categorical_lpmf|categorical_lupmf|categorical_rng|cauchy_cdf|cauchy_lccdf|cauchy_lcdf|cauchy_lpdf|cauchy_lupdf|cauchy_rng|cbrt|ceil|chi_square_cdf|chi_square_lccdf|chi_square_lcdf|chi_square_lpdf|chi_square_lupdf|chi_square_rng|chol2inv|cholesky_decompose|choose|col|cols|columns_dot_product|columns_dot_self|conj|cos|cosh|cov_exp_quad|crossprod|csr_extract_u|csr_extract_v|csr_extract_w|csr_matrix_times_vector|csr_to_dense_matrix|cumulative_sum|dae|dae_tol|determinant|diag_matrix|diag_post_multiply|diag_pre_multiply|diagonal|digamma|dims|dirichlet_lpdf|dirichlet_lupdf|dirichlet_rng|discrete_range_cdf|discrete_range_lccdf|discrete_range_lcdf|discrete_range_lpmf|discrete_range_lupmf|discrete_range_rng|distance|dot_product|dot_self|double_exponential_cdf|double_exponential_lccdf|double_exponential_lcdf|double_exponential_lpdf|double_exponential_lupdf|double_exponential_rng|e|eigenvalues|eigenvalues_sym|eigenvectors|eigenvectors_sym|erf|erfc|exp|exp2|exp_mod_normal_cdf|exp_mod_normal_lccdf|exp_mod_normal_lcdf|exp_mod_normal_lpdf|exp_mod_normal_lupdf|exp_mod_normal_rng|expm1|exponential_cdf|exponential_lccdf|exponential_lcdf|exponential_lpdf|exponential_lupdf|exponential_rng|fabs|falling_factorial|fdim|fft|fft2|floor|fma|fmax|fmin|fmod|frechet_cdf|frechet_lccdf|frechet_lcdf|frechet_lpdf|frechet_lupdf|frechet_rng|gamma_cdf|gamma_lccdf|gamma_lcdf|gamma_lpdf|gamma_lupdf|gamma_p|gamma_q|gamma_rng|gaussian_dlm_obs_lpdf|gaussian_dlm_obs_lupdf|generalized_inverse|get_imag|get_lp|get_real|gumbel_cdf|gumbel_lccdf|gumbel_lcdf|gumbel_lpdf|gumbel_lupdf|gumbel_rng|head|hmm_hidden_state_prob|hmm_latent_rng|hmm_marginal|hypergeometric_lpmf|hypergeometric_lupmf|hypergeometric_rng|hypot|identity_matrix|inc_beta|int_step|integrate_1d|integrate_ode|integrate_ode_adams|integrate_ode_bdf|integrate_ode_rk45|inv|inv_Phi|inv_chi_square_cdf|inv_chi_square_lccdf|inv_chi_square_lcdf|inv_chi_square_lpdf|inv_chi_square_lupdf|inv_chi_square_rng|inv_cloglog|inv_erfc|inv_fft|inv_fft2|inv_gamma_cdf|inv_gamma_lccdf|inv_gamma_lcdf|inv_gamma_lpdf|inv_gamma_lupdf|inv_gamma_rng|inv_inc_beta|inv_logit|inv_sqrt|inv_square|inv_wishart_cholesky_lpdf|inv_wishart_cholesky_lupdf|inv_wishart_cholesky_rng|inv_wishart_lpdf|inv_wishart_lupdf|inv_wishart_rng|inverse|inverse_spd|is_inf|is_nan|lambert_w0|lambert_wm1|lbeta|lchoose|ldexp|lgamma|linspaced_array|linspaced_int_array|linspaced_row_vector|linspaced_vector|lkj_corr_cholesky_lpdf|lkj_corr_cholesky_lupdf|lkj_corr_cholesky_rng|lkj_corr_lpdf|lkj_corr_lupdf|lkj_corr_rng|lmgamma|lmultiply|log|log10|log1m|log1m_exp|log1m_inv_logit|log1p|log1p_exp|log2|log_determinant|log_diff_exp|log_falling_factorial|log_inv_logit|log_inv_logit_diff|log_mix|log_modified_bessel_first_kind|log_rising_factorial|log_softmax|log_sum_exp|logistic_cdf|logistic_lccdf|logistic_lcdf|logistic_lpdf|logistic_lupdf|logistic_rng|logit|loglogistic_cdf|loglogistic_lpdf|loglogistic_rng|lognormal_cdf|lognormal_lccdf|lognormal_lcdf|lognormal_lpdf|lognormal_lupdf|lognormal_rng|machine_precision|map_rect|matrix_exp|matrix_exp_multiply|matrix_power|max|mdivide_left_spd|mdivide_left_tri_low|mdivide_right_spd|mdivide_right_tri_low|mean|min|modified_bessel_first_kind|modified_bessel_second_kind|multi_gp_cholesky_lpdf|multi_gp_cholesky_lupdf|multi_gp_lpdf|multi_gp_lupdf|multi_normal_cholesky_lpdf|multi_normal_cholesky_lupdf|multi_normal_cholesky_rng|multi_normal_lpdf|multi_normal_lupdf|multi_normal_prec_lpdf|multi_normal_prec_lupdf|multi_normal_rng|multi_student_cholesky_t_rng|multi_student_t_cholesky_lpdf|multi_student_t_cholesky_lupdf|multi_student_t_cholesky_rng|multi_student_t_lpdf|multi_student_t_lupdf|multi_student_t_rng|multinomial_logit_lpmf|multinomial_logit_lupmf|multinomial_logit_rng|multinomial_lpmf|multinomial_lupmf|multinomial_rng|multiply_log|multiply_lower_tri_self_transpose|neg_binomial_2_cdf|neg_binomial_2_lccdf|neg_binomial_2_lcdf|neg_binomial_2_log_glm_lpmf|neg_binomial_2_log_glm_lupmf|neg_binomial_2_log_lpmf|neg_binomial_2_log_lupmf|neg_binomial_2_log_rng|neg_binomial_2_lpmf|neg_binomial_2_lupmf|neg_binomial_2_rng|neg_binomial_cdf|neg_binomial_lccdf|neg_binomial_lcdf|neg_binomial_lpmf|neg_binomial_lupmf|neg_binomial_rng|negative_infinity|norm|norm1|norm2|normal_cdf|normal_id_glm_lpdf|normal_id_glm_lupdf|normal_lccdf|normal_lcdf|normal_lpdf|normal_lupdf|normal_rng|not_a_number|num_elements|ode_adams|ode_adams_tol|ode_adjoint_tol_ctl|ode_bdf|ode_bdf_tol|ode_ckrk|ode_ckrk_tol|ode_rk45|ode_rk45_tol|one_hot_array|one_hot_int_array|one_hot_row_vector|one_hot_vector|ones_array|ones_int_array|ones_row_vector|ones_vector|ordered_logistic_glm_lpmf|ordered_logistic_glm_lupmf|ordered_logistic_lpmf|ordered_logistic_lupmf|ordered_logistic_rng|ordered_probit_lpmf|ordered_probit_lupmf|ordered_probit_rng|owens_t|pareto_cdf|pareto_lccdf|pareto_lcdf|pareto_lpdf|pareto_lupdf|pareto_rng|pareto_type_2_cdf|pareto_type_2_lccdf|pareto_type_2_lcdf|pareto_type_2_lpdf|pareto_type_2_lupdf|pareto_type_2_rng|pi|poisson_cdf|poisson_lccdf|poisson_lcdf|poisson_log_glm_lpmf|poisson_log_glm_lupmf|poisson_log_lpmf|poisson_log_lupmf|poisson_log_rng|poisson_lpmf|poisson_lupmf|poisson_rng|polar|positive_infinity|pow|prod|proj|qr_Q|qr_R|qr_thin_Q|qr_thin_R|quad_form|quad_form_diag|quad_form_sym|quantile|rank|rayleigh_cdf|rayleigh_lccdf|rayleigh_lcdf|rayleigh_lpdf|rayleigh_lupdf|rayleigh_rng|reduce_sum|rep_array|rep_matrix|rep_row_vector|rep_vector|reverse|rising_factorial|round|row|rows|rows_dot_product|rows_dot_self|scale_matrix_exp_multiply|scaled_inv_chi_square_cdf|scaled_inv_chi_square_lccdf|scaled_inv_chi_square_lcdf|scaled_inv_chi_square_lpdf|scaled_inv_chi_square_lupdf|scaled_inv_chi_square_rng|sd|segment|sin|singular_values|sinh|size|skew_double_exponential_cdf|skew_double_exponential_lccdf|skew_double_exponential_lcdf|skew_double_exponential_lpdf|skew_double_exponential_lupdf|skew_double_exponential_rng|skew_normal_cdf|skew_normal_lccdf|skew_normal_lcdf|skew_normal_lpdf|skew_normal_lupdf|skew_normal_rng|softmax|sort_asc|sort_desc|sort_indices_asc|sort_indices_desc|sqrt|sqrt2|square|squared_distance|std_normal_cdf|std_normal_lccdf|std_normal_lcdf|std_normal_lpdf|std_normal_lupdf|std_normal_rng|step|student_t_cdf|student_t_lccdf|student_t_lcdf|student_t_lpdf|student_t_lupdf|student_t_rng|sub_col|sub_row|sum|svd_U|svd_V|symmetrize_from_lower_tri|tail|tan|tanh|target|tcrossprod|tgamma|to_array_1d|to_array_2d|to_complex|to_matrix|to_row_vector|to_vector|trace|trace_gen_quad_form|trace_quad_form|trigamma|trunc|uniform_cdf|uniform_lccdf|uniform_lcdf|uniform_lpdf|uniform_lupdf|uniform_rng|uniform_simplex|variance|von_mises_cdf|von_mises_lccdf|von_mises_lcdf|von_mises_lpdf|von_mises_lupdf|von_mises_rng|weibull_cdf|weibull_lccdf|weibull_lcdf|weibull_lpdf|weibull_lupdf|weibull_rng|wiener_lpdf|wiener_lupdf|wishart_cholesky_lpdf|wishart_cholesky_lupdf|wishart_cholesky_rng|wishart_lpdf|wishart_lupdf|wishart_rng|zeros_array|zeros_int_array|zeros_row_vector)\\b',
          name: 'support.function.function.stan'
        }
      ]
    },
    numbers: {
      patterns: [
        {
          match:
            '(?x)\n(\n[0-9]+\\.[0-9]*([eE][+-]?[0-9]+)?\n|\n\\.[0-9]+([eE][+-]?[0-9]+)?\n|\n[0-9]+[eE][+-]?[0-9]+i?\n)',
          name: 'constant.numeric.real.stan'
        },
        {match: '[0-9]+i?(?=[^A-Za-z_])', name: 'constant.numeric.integer.stan'}
      ]
    },
    operators: {
      patterns: [
        {match: '<-', name: 'invalid.deprecated.assignment.stan'},
        {match: ':', name: 'keyword.operator.colon.stan'},
        {match: '[?]', name: 'keyword.operator.conditional.stan'},
        {match: '[|]{2}|&&', name: 'keyword.operator.logical.stan'},
        {match: '==|!=|<=?|>=?', name: 'keyword.operator.comparison.stan'},
        {match: '!', name: 'keyword.operator.logical.stan'},
        {match: '[+-]=|\\.?[*/]=|=', name: 'keyword.operator.assignment.stan'},
        {
          match: "\\+|-|\\.?\\*|\\.?/|%|\\\\|\\^|'",
          name: 'keyword.operator.arithmetic.stan'
        }
      ]
    },
    reserved: {
      patterns: [
        {
          match:
            '\\b(for|in|while|repeat|until|if|then|else|true|false|var|struct|typedef|export|auto|extern|var|static)\\b',
          name: 'invalid.illegal.reserved.stan'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.stan'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.stan'}},
          name: 'string.quoted.double.stan',
          patterns: [
            {
              match: '[^ a-zA-Z0-9~@#$%^&*_\'`\\-+={}\\[\\]()<>|/!?.,;:"]+',
              name: 'invalid.illegal.string.stan'
            }
          ]
        }
      ]
    }
  },
  scopeName: 'source.stan'
}

export default grammar
