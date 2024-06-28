// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mgalloy/idl.tmbundle>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pro', '.dlm'],
  names: ['idl'],
  patterns: [
    {
      captures: {
        1: {name: 'storage.type.idl'},
        2: {name: 'storage.type.idl'},
        3: {name: 'variable.parameter.output.function.idl'},
        4: {name: 'variable.parameter.output.function.idl'},
        5: {name: 'entity.name.function.idl'}
      },
      match:
        '(?ix)\n(?=(function|pro)\\b) # borrowed from ruby bundle\n(?<=^|\\s)(function|pro)\\s+ # the function keyword\n(?>\\[(.*)\\])? # match various different combination of output arguments\n((?>[a-zA-Z_][a-zA-Z_$0-9]*))?\n(?>\\s*=\\s*)?\n((?>[a-zA-Z_][a-zA-Z_$0-9]*(::[a-zA-Z_][a-zA-Z_$0-9]*)?(?>[?!]|=(?!>))? )) # the function name\n',
      name: 'meta.function.idl'
    },
    {include: '#constants_override'},
    {include: '#brackets'},
    {include: '#curlybrackets'},
    {include: '#float'},
    {include: '#integer'},
    {include: '#string'},
    {include: '#operators'},
    {include: '#all_idl_keywords'},
    {include: '#all_idl_comments'},
    {include: '#variable'}
  ],
  repository: {
    all_idl_comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.divider.idl'}},
          match: '^;(=)\\s*$\\n',
          name: 'comment.line.banner.divider.idl'
        },
        {
          captures: {1: {name: 'meta.toc-list.banner.line.idl'}},
          match: '^\\s*;=\\s*(.*?)\\s*$\\n?',
          name: 'comment.line.banner.idl'
        },
        {
          begin: ';',
          beginCaptures: {0: {name: 'punctuation.definition.comment.idl'}},
          end: '\\n',
          name: 'comment.line.semicolon.idl'
        }
      ]
    },
    all_idl_keywords: {
      patterns: [
        {include: '#idl_keyword_control'},
        {include: '#idl_keyword_operator'},
        {include: '#idl_operator'},
        {include: '#idl_storage_type'},
        {include: '#idl_sysvar'},
        {include: '#idl_support_function'}
      ]
    },
    allofem: {
      patterns: [
        {include: '#curlybrackets'},
        {include: '#end_in_parens'},
        {include: '#brackets'},
        {include: '#string'},
        {include: '#all_idl_keywords'},
        {include: '#all_idl_comments'},
        {include: '#variable'},
        {include: '#float'},
        {include: '#integer'}
      ]
    },
    brackets: {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brackets.idl'}},
      contentName: 'meta.brackets.idl',
      end: '\\]',
      endCaptures: {0: {name: 'meta.brackets.idl'}},
      patterns: [{include: '#allofem'}]
    },
    end_in_parens: {match: '\\bend\\b', name: 'keyword.operator.symbols.idl'},
    escaped_quote: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[abefnprtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-zA-Z0-9]+)',
          name: 'constant.character.escape.idl'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.idl'}
      ]
    },
    float: {
      match: '(?i)\\b(\\.\\d+|\\d+\\.?\\d*)([ed][\\+-]?\\d*)?\\b',
      name: 'constant.numeric.idl'
    },
    idl_keyword_control: {
      match:
        '(?i)(?<!\\.)\\b(begin|break|case|common|compile_opt|continue|do|else|end|endcase|endelse|endfor|endforeach|endif|endrep|endswitch|endwhile|for|foreach|forward_function|goto|if|inherits|of|on_ioerror|repeat|switch|then|until|while)\\b',
      name: 'keyword.control.idl'
    },
    idl_keyword_operator: {
      match: '(?i)\\b(and|eq|ge|gt|le|lt|mod|ne|not|or|xor)\\b',
      name: 'keyword.operator.idl'
    },
    idl_operator: {
      match:
        '(?i)(>|<|&&|\\?|:|\\||\\|\\||\\+|-|\\*|\\.\\*|/|\\./|\\\\|\\.\\\\|\\^|\\.\\^)',
      name: 'keyword.operator.symbols.idl'
    },
    idl_storage_type: {
      match: '(?i)(?<!\\.)\\b(function|pro)\\s',
      name: 'storage.type.idl'
    },
    idl_support_function: {
      match:
        '(?i)(?<!\\.)\\b(abs|acos|adapt_hist_equal|alog|alog10|amoeba|annotate|app_user_dir|app_user_dir_query|arg_present|array_equal|array_indices|arrow|ascii_template|asin|assoc|atan|axis|a_correlate|bandpass_filter|bandreject_filter|barplot|bar_plot|beseli|beselj|beselk|besely|beta|bilinear|binary_template|bindgen|binomial|bin_date|bit_ffs|bit_population|blas_axpy|blk_con|box_cursor|breakpoint|broyden|butterworth|bytarr|byte|byteorder|bytscl|caldat|calendar|call_external|call_function|call_method|call_procedure|canny|catch|cd|cdf_attcreate|cdf_attdelete|cdf_attexists|cdf_attget|cdf_attget_entry|cdf_attinq|cdf_attnum|cdf_attput|cdf_attrename|cdf_close|cdf_compression|cdf_control|cdf_create|cdf_delete|cdf_doc|cdf_encode_epoch|cdf_encode_epoch16|cdf_encode_tt2000|cdf_epoch|cdf_epoch16|cdf_epoch_compare|cdf_epoch_diff|cdf_epoch_tojuldays|cdf_error|cdf_exists|cdf_inquire|cdf_leapseconds_info|cdf_lib_info|cdf_open|cdf_parse_epoch|cdf_parse_epoch16|cdf_parse_tt2000|cdf_set_cdf27_backward_c|cdf_set_md5checksum|cdf_set_validate|cdf_tt2000|cdf_varcreate|cdf_vardelete|cdf_varget|cdf_varget1|cdf_varinq|cdf_varnum|cdf_varput|cdf_varrename|ceil|chebyshev|check_math|chisqr_cvf|chisqr_pdf|choldc|cholsol|cindgen|cir_3pnt|close|cluster|cluster_tree|clust_wts|cmyk_convert|colorbar|colorize_sample|colormap_applicable|colormap_gradient|colormap_rotation|colortable|color_convert|color_exchange|color_quan|color_range_map|comfit|command_line_args|complex|complexarr|complexround|compute_mesh_normals|cond|congrid|conj|constrained_min|contour|convert_coord|convol|convol_fft|coord2to3|copy_lun|correlate|cos|cosh|cpu|cramer|create_cursor|create_struct|create_view|crossp|crvlength|cti_test|ct_luminance|cursor|curvefit|cvttobm|cv_coord|cw_animate|cw_animate_getp|cw_animate_load|cw_animate_run|cw_arcball|cw_bgroup|cw_clr_index|cw_colorsel|cw_defroi|cw_field|cw_filesel|cw_form|cw_fslider|cw_light_editor|cw_light_editor_get|cw_light_editor_set|cw_orient|cw_palette_editor|cw_palette_editor_get|cw_palette_editor_set|cw_pdmenu|cw_rgbslider|cw_tmpl|cw_zoom|c_correlate|dblarr|db_exists|dcindgen|dcomplex|dcomplexarr|define_key|define_msgblk|define_msgblk_from_file|defroi|defsysv|delvar|dendrogram|dendro_plot|deriv|derivsig|determ|device|dfpmin|diag_matrix|dialog_dbconnect|dialog_message|dialog_pickfile|dialog_printersetup|dialog_printjob|dialog_read_image|dialog_write_image|digital_filter|dilate|dindgen|dissolve|dist|distance_measure|dlm_load|dlm_register|doc_library|double|draw_roi|edge_dog|efont|eigenql|eigenvec|ellipse|elmhes|emboss|empty|enable_sysrtn|eof|eos_eh_convang|eos_eh_getversion|eos_eh_idinfo|eos_exists|eos_gd_attach|eos_gd_attrinfo|eos_gd_blksomoffset|eos_gd_close|eos_gd_compinfo|eos_gd_create|eos_gd_defboxregion|eos_gd_defcomp|eos_gd_defdim|eos_gd_deffield|eos_gd_deforigin|eos_gd_defpixreg|eos_gd_defproj|eos_gd_deftile|eos_gd_defvrtregion|eos_gd_detach|eos_gd_diminfo|eos_gd_dupregion|eos_gd_extractregion|eos_gd_fieldinfo|eos_gd_getfillvalue|eos_gd_getpixels|eos_gd_getpixvalues|eos_gd_gridinfo|eos_gd_inqattrs|eos_gd_inqdims|eos_gd_inqfields|eos_gd_inqgrid|eos_gd_interpolate|eos_gd_nentries|eos_gd_open|eos_gd_origininfo|eos_gd_pixreginfo|eos_gd_projinfo|eos_gd_query|eos_gd_readattr|eos_gd_readfield|eos_gd_readtile|eos_gd_regioninfo|eos_gd_setfillvalue|eos_gd_settilecache|eos_gd_tileinfo|eos_gd_writeattr|eos_gd_writefield|eos_gd_writefieldmeta|eos_gd_writetile|eos_pt_attach|eos_pt_attrinfo|eos_pt_bcklinkinfo|eos_pt_close|eos_pt_create|eos_pt_defboxregion|eos_pt_deflevel|eos_pt_deflinkage|eos_pt_deftimeperiod|eos_pt_defvrtregion|eos_pt_detach|eos_pt_extractperiod|eos_pt_extractregion|eos_pt_fwdlinkinfo|eos_pt_getlevelname|eos_pt_getrecnums|eos_pt_inqattrs|eos_pt_inqpoint|eos_pt_levelindx|eos_pt_levelinfo|eos_pt_nfields|eos_pt_nlevels|eos_pt_nrecs|eos_pt_open|eos_pt_periodinfo|eos_pt_periodrecs|eos_pt_query|eos_pt_readattr|eos_pt_readlevel|eos_pt_regioninfo|eos_pt_regionrecs|eos_pt_sizeof|eos_pt_updatelevel|eos_pt_writeattr|eos_pt_writelevel|eos_query|eos_sw_attach|eos_sw_attrinfo|eos_sw_close|eos_sw_compinfo|eos_sw_create|eos_sw_defboxregion|eos_sw_defcomp|eos_sw_defdatafield|eos_sw_defdim|eos_sw_defdimmap|eos_sw_defgeofield|eos_sw_defidxmap|eos_sw_deftimeperiod|eos_sw_defvrtregion|eos_sw_detach|eos_sw_diminfo|eos_sw_dupregion|eos_sw_extractperiod|eos_sw_extractregion|eos_sw_fieldinfo|eos_sw_getfillvalue|eos_sw_idxmapinfo|eos_sw_inqattrs|eos_sw_inqdatafields|eos_sw_inqdims|eos_sw_inqgeofields|eos_sw_inqidxmaps|eos_sw_inqmaps|eos_sw_inqswath|eos_sw_mapinfo|eos_sw_nentries|eos_sw_open|eos_sw_periodinfo|eos_sw_query|eos_sw_readattr|eos_sw_readfield|eos_sw_regioninfo|eos_sw_setfillvalue|eos_sw_writeattr|eos_sw_writedatameta|eos_sw_writefield|eos_sw_writegeometa|erase|erf|erfc|erfcx|erode|errorplot|errplot|estimator_filter|execute|exit|exp|expand|expand_path|expint|extrac|extract_slice|factorial|fft|filepath|file_basename|file_chmod|file_copy|file_delete|file_dirname|file_expand_path|file_info|file_lines|file_link|file_mkdir|file_move|file_poll_input|file_readlink|file_same|file_search|file_test|file_which|findgen|finite|fix|flick|float|floor|flow3|fltarr|flush|format_axis_values|free_lun|fstat|fulstr|funct|fv_test|fx_root|fz_roots|f_cvf|f_pdf|gamma|gamma_ct|gauss2dfit|gaussfit|gaussian_function|gaussint|gauss_cvf|gauss_pdf|gauss_smooth|getenv|getwindows|get_drive_list|get_dxf_objects|get_kbrd|get_login_info|get_lun|get_screen_size|greg2jul|grib_clone|grib_close|grib_count|grib_find_nearest|grib_get|grib_get_api_version|grib_get_array|grib_get_double_elements|grib_get_message_size|grib_get_native_type|grib_get_size|grib_get_values|grib_gribex_mode|grib_gts_header|grib_index_get|grib_index_get_size|grib_index_new_from_file|grib_index_read|grib_index_release|grib_index_select|grib_index_write|grib_is_missing|grib_iterator_delete|grib_iterator_new|grib_iterator_next|grib_keys_iterator_delete|grib_keys_iterator_get_name|grib_keys_iterator_new|grib_keys_iterator_next|grib_keys_iterator_rewind|grib_multi_append|grib_multi_new|grib_multi_release|grib_multi_support|grib_multi_write|grib_new_from_file|grib_new_from_index|grib_new_from_samples|grib_open|grib_release|grib_set|grib_set_array|grib_set_missing|grib_set_values|grib_write_message|grid3|griddata|grid_input|grid_tps|gs_iter|h5a_close|h5a_create|h5a_delete|h5a_get_name|h5a_get_num_attrs|h5a_get_space|h5a_get_type|h5a_open_idx|h5a_open_name|h5a_read|h5a_write|h5d_close|h5d_create|h5d_extend|h5d_get_space|h5d_get_storage_size|h5d_get_type|h5d_open|h5d_read|h5d_write|h5f_close|h5f_create|h5f_is_hdf5|h5f_open|h5g_close|h5g_create|h5g_get_comment|h5g_get_linkval|h5g_get_member_name|h5g_get_nmembers|h5g_get_num_objs|h5g_get_objinfo|h5g_get_obj_name_by_idx|h5g_link|h5g_move|h5g_open|h5g_set_comment|h5g_unlink|h5i_get_file_id|h5i_get_type|h5r_create|h5r_dereference|h5r_get_object_type|h5r_get_region|h5s_close|h5s_copy|h5s_create_scalar|h5s_create_simple|h5s_get_select_bounds|h5s_get_select_elem_npoi|h5s_get_select_elem_poin|h5s_get_select_hyper_blo|h5s_get_select_hyper_nbl|h5s_get_select_npoints|h5s_get_simple_extent_di|h5s_get_simple_extent_nd|h5s_get_simple_extent_np|h5s_get_simple_extent_ty|h5s_is_simple|h5s_offset_simple|h5s_select_all|h5s_select_elements|h5s_select_hyperslab|h5s_select_none|h5s_select_valid|h5s_set_extent_none|h5s_set_extent_simple|h5t_array_create|h5t_close|h5t_commit|h5t_committed|h5t_compound_create|h5t_copy|h5t_enum_create|h5t_enum_get_data|h5t_enum_insert|h5t_enum_nameof|h5t_enum_set_data|h5t_enum_valueof|h5t_enum_values_to_names|h5t_equal|h5t_get_array_dims|h5t_get_array_ndims|h5t_get_class|h5t_get_cset|h5t_get_ebias|h5t_get_fields|h5t_get_inpad|h5t_get_member_class|h5t_get_member_index|h5t_get_member_name|h5t_get_member_offset|h5t_get_member_type|h5t_get_member_value|h5t_get_nmembers|h5t_get_norm|h5t_get_offset|h5t_get_order|h5t_get_pad|h5t_get_precision|h5t_get_sign|h5t_get_size|h5t_get_strpad|h5t_get_super|h5t_get_tag|h5t_idltype|h5t_idl_create|h5t_insert|h5t_memtype|h5t_open|h5t_reference_create|h5t_set_tag|h5t_str_to_vlen|h5t_vlen_create|h5t_vlen_to_str|h5_browser|h5_close|h5_create|h5_get_libversion|h5_open|h5_parse|hanning|hash|hdf_an_annlen|hdf_an_annlist|hdf_an_atype2tag|hdf_an_create|hdf_an_createf|hdf_an_end|hdf_an_endaccess|hdf_an_fileinfo|hdf_an_get_tagref|hdf_an_id2tagref|hdf_an_numann|hdf_an_readann|hdf_an_select|hdf_an_start|hdf_an_tag2atype|hdf_an_tagref2id|hdf_an_writeann|hdf_browser|hdf_close|hdf_deldd|hdf_df24_addimage|hdf_df24_getimage|hdf_df24_getinfo|hdf_df24_lastref|hdf_df24_nimages|hdf_df24_readref|hdf_df24_restart|hdf_dfan_addfds|hdf_dfan_addfid|hdf_dfan_getdesc|hdf_dfan_getfds|hdf_dfan_getfid|hdf_dfan_getlabel|hdf_dfan_lablist|hdf_dfan_lastref|hdf_dfan_putdesc|hdf_dfan_putlabel|hdf_dfp_addpal|hdf_dfp_getpal|hdf_dfp_lastref|hdf_dfp_npals|hdf_dfp_putpal|hdf_dfp_readref|hdf_dfp_restart|hdf_dfp_writeref|hdf_dfr8_addimage|hdf_dfr8_getimage|hdf_dfr8_getinfo|hdf_dfr8_lastref|hdf_dfr8_nimages|hdf_dfr8_putimage|hdf_dfr8_readref|hdf_dfr8_restart|hdf_dfr8_setpalette|hdf_dupdd|hdf_exists|hdf_gr_attrinfo|hdf_gr_create|hdf_gr_end|hdf_gr_endaccess|hdf_gr_fileinfo|hdf_gr_findattr|hdf_gr_getattr|hdf_gr_getchunkinfo|hdf_gr_getiminfo|hdf_gr_getlutid|hdf_gr_getlutinfo|hdf_gr_idtoref|hdf_gr_luttoref|hdf_gr_nametoindex|hdf_gr_readimage|hdf_gr_readlut|hdf_gr_reftoindex|hdf_gr_select|hdf_gr_setattr|hdf_gr_setchunk|hdf_gr_setchunkcache|hdf_gr_setcompress|hdf_gr_setexternalfile|hdf_gr_start|hdf_gr_writeimage|hdf_gr_writelut|hdf_hdf2idltype|hdf_idl2hdftype|hdf_ishdf|hdf_lib_info|hdf_newref|hdf_number|hdf_open|hdf_packdata|hdf_read|hdf_sd_adddata|hdf_sd_attrfind|hdf_sd_attrinfo|hdf_sd_attrset|hdf_sd_create|hdf_sd_dimget|hdf_sd_dimgetid|hdf_sd_dimset|hdf_sd_end|hdf_sd_endaccess|hdf_sd_fileinfo|hdf_sd_getdata|hdf_sd_getinfo|hdf_sd_idtoref|hdf_sd_iscoordvar|hdf_sd_nametoindex|hdf_sd_reftoindex|hdf_sd_select|hdf_sd_setcompress|hdf_sd_setextfile|hdf_sd_setinfo|hdf_sd_start|hdf_unpackdata|hdf_vd_attach|hdf_vd_attrfind|hdf_vd_attrinfo|hdf_vd_attrset|hdf_vd_detach|hdf_vd_fdefine|hdf_vd_fexist|hdf_vd_find|hdf_vd_get|hdf_vd_getid|hdf_vd_getinfo|hdf_vd_insert|hdf_vd_isattr|hdf_vd_isvd|hdf_vd_isvg|hdf_vd_lone|hdf_vd_nattrs|hdf_vd_read|hdf_vd_seek|hdf_vd_setinfo|hdf_vd_write|hdf_vg_addtr|hdf_vg_attach|hdf_vg_detach|hdf_vg_getid|hdf_vg_getinfo|hdf_vg_getnext|hdf_vg_gettr|hdf_vg_gettrs|hdf_vg_inqtr|hdf_vg_insert|hdf_vg_isvd|hdf_vg_isvg|hdf_vg_lone|hdf_vg_number|hdf_vg_setinfo|heap_free|heap_gc|heap_nosave|heap_refcount|heap_save|help|hilbert|histogram|hist_2d|hist_equal|hls|hough|hqr|hsv|h_eq_ct|h_eq_int|i18n_multibytetoutf8|i18n_multibytetowidechar|i18n_utf8tomultibyte|i18n_widechartomultibyte|ibeta|icontour|iconvertcoord|idelete|identity|idlexbr_assistant|idlitsys_createtool|idl_base64|idl_validname|iellipse|igamma|igetcurrent|igetdata|igetid|igetproperty|iimage|image|image_cont|image_statistics|imaginary|imap|indgen|intarr|interpol|interpolate|interval_volume|int_2d|int_3d|int_tabulated|invert|ioctl|iopen|iplot|ipolygon|ipolyline|iputdata|iregister|ireset|iresolve|irotate|ir_filter|isa|isave|iscale|isetcurrent|isetproperty|ishft|isocontour|isosurface|isurface|itext|itranslate|ivector|ivolume|izoom|i_beta|journal|json_parse|json_serialize|jul2greg|julday|keyword_set|krig2d|kurtosis|kw_test|l64indgen|label_date|label_region|ladfit|laguerre|laplacian|la_choldc|la_cholmprove|la_cholsol|la_determ|la_eigenproblem|la_eigenql|la_eigenvec|la_elmhes|la_gm_linear_model|la_hqr|la_invert|la_least_squares|la_least_square_equality|la_linear_equation|la_ludc|la_lumprove|la_lusol|la_svd|la_tridc|la_trimprove|la_triql|la_trired|la_trisol|least_squares_filter|leefilt|legend|legendre|linbcg|lindgen|linfit|linkimage|list|ll_arc_distance|lmfit|lmgr|lngamma|lnp_test|loadct|locale_get|logical_and|logical_or|logical_true|lon64arr|lonarr|long|long64|lsode|ludc|lumprove|lusol|lu_complex|machar|make_array|make_dll|make_rt|map|mapcontinents|mapgrid|map_2points|map_continents|map_grid|map_image|map_patch|map_proj_forward|map_proj_image|map_proj_info|map_proj_init|map_proj_inverse|map_set|matrix_multiply|matrix_power|max|md_test|mean|meanabsdev|mean_filter|median|memory|mesh_clip|mesh_decimate|mesh_issolid|mesh_merge|mesh_numtriangles|mesh_obj|mesh_smooth|mesh_surfacearea|mesh_validate|mesh_volume|message|min|min_curve_surf|mk_html_help|modifyct|moment|morph_close|morph_distance|morph_gradient|morph_hitormiss|morph_open|morph_thin|morph_tophat|multi|m_correlate|ncdf_attcopy|ncdf_attdel|ncdf_attget|ncdf_attinq|ncdf_attname|ncdf_attput|ncdf_attrename|ncdf_close|ncdf_control|ncdf_create|ncdf_dimdef|ncdf_dimid|ncdf_dimidsinq|ncdf_diminq|ncdf_dimrename|ncdf_exists|ncdf_fullgroupname|ncdf_groupdef|ncdf_groupname|ncdf_groupparent|ncdf_groupsinq|ncdf_inquire|ncdf_ncidinq|ncdf_open|ncdf_unlimdimsinq|ncdf_vardef|ncdf_varget|ncdf_varget1|ncdf_varid|ncdf_varidsinq|ncdf_varinq|ncdf_varput|ncdf_varrename|newton|noise_hurl|noise_pick|noise_scatter|noise_slur|norm|n_elements|n_params|n_tags|objarr|obj_class|obj_destroy|obj_hasmethod|obj_isa|obj_new|obj_valid|online_help|on_error|open|openr|openu|openw|oplot|oploterr|parse_url|particle_trace|path_cache|path_sep|pcomp|plot|plot3d|ploterr|plots|plot_3dbox|plot_field|pnt_line|point_lun|polarplot|polar_contour|polar_surface|poly|polyfill|polyfillv|polygon|polyline|polyshade|polywarp|poly_2d|poly_area|poly_fit|popd|powell|pref_commit|pref_get|pref_set|prewitt|primes|print|printd|printf|product|profile|profiler|profiles|project_vol|psafm|pseudo|ps_show_fonts|ptrarr|ptr_free|ptr_new|ptr_valid|pushd|p_correlate|qgrid3|qhull|qromb|qromo|qsimp|query_ascii|query_bmp|query_csv|query_dicom|query_gif|query_image|query_jpeg|query_jpeg2000|query_mrsid|query_pict|query_png|query_ppm|query_srf|query_tiff|query_wav|radon|randomn|randomu|ranks|rdpix|read|readf|reads|readu|read_ascii|read_binary|read_bmp|read_csv|read_dicom|read_gif|read_image|read_interfile|read_jpeg|read_jpeg2000|read_mrsid|read_pict|read_png|read_ppm|read_spr|read_srf|read_sylk|read_tiff|read_wav|read_wave|read_x11_bitmap|read_xwd|real_part|rebin|recall_commands|recon3|reduce_colors|reform|region_grow|register_cursor|regress|replicate|replicate_inplace|resolve_all|resolve_routine|restore|retall|return|reverse|rk4|roberts|rot|rotate|round|routine_filepath|routine_info|rs_test|r_correlate|r_test|save|savgol|scale3|scale3d|scope_level|scope_traceback|scope_varfetch|scope_varname|search2d|search3d|sem_create|sem_delete|sem_lock|sem_release|setenv|set_plot|set_shading|sfit|shade_surf|shade_surf_irr|shade_volume|shift|shift_diff|shmdebug|shmmap|shmunmap|shmvar|show3|showfont|simplex|sin|sindgen|sinh|size|skewness|skip_lun|slicer3|slide_image|smooth|sobel|socket|sort|spawn|spher_harm|sph_4pnt|sph_scat|spline|spline_p|spl_init|spl_interp|sprsab|sprsax|sprsin|sprstp|sqrt|standardize|stddev|stop|strarr|strcmp|strcompress|streamline|stregex|stretch|string|strjoin|strlen|strlowcase|strmatch|strmessage|strmid|strpos|strput|strsplit|strtrim|struct_assign|struct_hide|strupcase|surface|surfr|svdc|svdfit|svsol|swap_endian|swap_endian_inplace|symbol|systime|s_test|t3d|tag_names|tan|tanh|tek_color|temporary|tetra_clip|tetra_surface|tetra_volume|text|thin|threed|timegen|time_test2|tm_test|total|trace|transpose|triangulate|trigrid|triql|trired|trisol|tri_surf|truncate_lun|ts_coef|ts_diff|ts_fcast|ts_smooth|tv|tvcrs|tvlct|tvrd|tvscl|typename|t_cvt|t_pdf|uindgen|uint|uintarr|ul64indgen|ulindgen|ulon64arr|ulonarr|ulong|ulong64|uniq|unsharp_mask|usersym|value_locate|variance|vector|vector_field|vel|velovect|vert_t3d|voigt|voronoi|voxel_proj|wait|warp_tri|watershed|wdelete|wf_draw|where|widget_base|widget_button|widget_combobox|widget_control|widget_displaycontextmen|widget_draw|widget_droplist|widget_event|widget_info|widget_label|widget_list|widget_propertysheet|widget_slider|widget_tab|widget_table|widget_text|widget_tree|widget_tree_move|widget_window|wiener_filter|window|writeu|write_bmp|write_csv|write_gif|write_image|write_jpeg|write_jpeg2000|write_nrif|write_pict|write_png|write_ppm|write_spr|write_srf|write_sylk|write_tiff|write_wav|write_wave|wset|wshow|wtn|wv_applet|wv_cwt|wv_cw_wavelet|wv_denoise|wv_dwt|wv_fn_coiflet|wv_fn_daubechies|wv_fn_gaussian|wv_fn_haar|wv_fn_morlet|wv_fn_paul|wv_fn_symlet|wv_import_data|wv_import_wavelet|wv_plot3d_wps|wv_plot_multires|wv_pwt|wv_tool_denoise|xbm_edit|xdisplayfile|xdxf|xfont|xinteranimate|xloadct|xmanager|xmng_tmpl|xmtool|xobjview|xobjview_rotate|xobjview_write_image|xpalette|xpcolor|xplot3d|xregistered|xroi|xsq_test|xsurface|xvaredit|xvolume|xvolume_rotate|xvolume_write_image|xyouts|zoom|zoom_24)\\b',
      name: 'support.function.idl'
    },
    idl_sysvar: {
      match: '\\s\\![A-Za-z_][A-Za-z0-9_$]*(\\.[A-Za-z_][A-Za-z0-9_$]*)*\\b',
      name: 'constant.language.idl'
    },
    integer: {
      patterns: [
        {
          match: "(?i)'[01]+'b(b|s|u|us|l|ul|ll|ull)?\\b",
          name: 'constant.numeric.idl'
        },
        {
          match: '(?i)(?<!\\.)\\b\\d+(b|s|u|us|l|ul|ll|ull)?(?!\\.)\\b',
          name: 'constant.numeric.idl'
        },
        {
          match: "(?i)'[0-7]+'o(b|s|u|us|l|ul|ll|ull)?\\b",
          name: 'constant.numeric.idl'
        },
        {
          match: '(?i)\\"[0-7]+(b|s|u|us|l|ul|ll|ull)?\\b',
          name: 'constant.numeric.idl'
        },
        {
          match: "(?i)'[0-9a-f]+'x(b|s|u|us|l|ul|ll|ull)?\\b",
          name: 'constant.numeric.idl'
        },
        {begin: '"', end: '"|$', name: 'string.quoted.double.idl'},
        {begin: "'", end: "'|$", name: 'string.quoted.single.idl'}
      ]
    },
    variable: {
      match: '\\b[_a-zA-Z][_a-zA-Z0-9$]*\\b',
      name: 'meta.variable.other.valid.idl'
    }
  },
  scopeName: 'source.idl'
}

export default grammar
