local null_ls = require("null-ls")
local lspconfig = require("lspconfig")
local opts = { noremap = true, silent = true }
local keymap = vim.keymap.set
local capabilities = require("cmp_nvim_lsp").default_capabilities()
local function augroup(name)
  return vim.api.nvim_create_augroup("autocmd_" .. name, { clear = true })
end


null_ls.setup({
  sources = {
    null_ls.builtins.formatting.prettier,
  },
})

lspconfig.tsserver.setup({
  capabilities = capabilities,
  on_attach = on_attach,
})

vim.api.nvim_create_autocmd("BufEnter", {
  group = augroup(".nvim.lua"),
  callback = function()
    if vim.bo.filetype == "javascript" then
      vim.bo.filetype = "javascriptreact"
    end
  end,
})
